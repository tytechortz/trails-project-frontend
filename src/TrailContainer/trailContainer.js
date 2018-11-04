import React, { Component } from 'react';
import AddTrail from '../AddTrail/addTrail';

class TrailContainer extends Component {
    constructor(){
        super();

        this.state = {
            movies: []
        }
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
    render(){
        console.log(this.state)
        return (
            <div>
                <AddTrail addTrail={this.addTrail} />
            </div>
        )
    }
}

export default TrailContainer;