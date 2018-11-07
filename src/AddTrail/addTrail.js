import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class AddTrail extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            locationLat: '',
            locationLon: '',
            description: '',
            rating: ''
        }
    }
    updateTrail = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
    render(){
        console.log("GOT HERE 2");
        return (
            <form onSubmit={this.props.addTrail.bind(null, this.state)}>
                <label>
                    Trail:
                    <input type='text' name='name' value={this.state.name} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Location Latitude:
                    <input type='text' name='locationLat' value={this.state.locationLat} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Location Longitude:
                    <input type='text' name='locationLon' value={this.state.locationLon} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Description:
                    <input type='text' name='description' value={this.state.description} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Rating:
                    <input type='number' name='rating' value={this.state.rating} onChange={this.updateTrail}/>  
                </label>
                <button type='Submit'>Add Trail</button>
            </form>
            )
    }
}

export default AddTrail;