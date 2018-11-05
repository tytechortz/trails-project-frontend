import React, { Component } from 'react';
import AddTrail from '../AddTrail/addTrail';
import TrailList from '../TrailList/trailList';

class TrailContainer extends Component {
    constructor(){
        super();

        this.state = {
            trails: []
        }
    }
getTrails = async () => {
    const trails = await fetch('http://localhost:9000/api/v1/trails');
    const trailsParsedJSON = await trails.json();
    return trailsParsedJSON
}
componentDidMount(){
    this.getTrails().then((trails) => {
        this.setState({trails: trails.data})
    }).catch((err) => {
        console.log(err);
    })
}

addTrail = async (trail, e) => {
    e.preventDefault();
    console.log(trail);

    try {
        const addedTrail = await fetch('http://localhost:9000/api/v1/trails', {
            method: 'POST',
            body: JSON.stringify(trail),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await addedTrail.json();
        console.log(parsedResponse, ' this is response')

        this.setState({trails: [...this.state.trails, parsedResponse.data]})


        } catch(err){
            console.log(err)
        }
}
deleteTrail = async (id) => {
    console.log(id, ' deleteTrail');
    const deleteTrailResponse = await fetch('http://localhost:9000/api/v1/trails/' + id, {
        method: 'DELETE'
    });

    const deleteTrailParsed = await deleteTrailResponse.json();
    this.setState({trails: this.state.trails.filter((trail) => trail._id !== id)})
    console.log(deleteTrailParsed, ' response from server')
    
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <AddTrail addTrail={this.addTrail} />
                <TrailList trails={this.state.trails} deleteTrail={this.deleteTrail}/>
            </div>
        )
    }
}

export default TrailContainer;