import React, { Component } from 'react';

class AddTrail extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            location: '',
            description: '',
            rating: ''
        }
    }
    updateTrail = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render(){
        return (
            <form onSubmit={this.props.addTrail.bind(null, this.state)}>
                <label>
                    Trail:
                    <input type='text' name='name' onChange={this.updateTrail}/>  
                </label>
                <label>
                    location:
                    <input type='text' name='location' onChange={this.updateTrail}/>  
                </label>
                <label>
                    description:
                    <input type='text' name='description' onChange={this.updateTrail}/>  
                </label>
                <label>
                    rating:
                    <input type='number' name='rating' onChange={this.updateTrail}/>  
                </label>
                <input type='Submit' value="Add Trail"/>
            </form>
            )
    }
}

export default AddTrail;