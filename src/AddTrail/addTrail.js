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
                    <input type='text' name='name' value={this.state.name} onChange={this.updateTrail}/>  
                </label>
                <label>
                    Location:
                    <input type='text' name='location' value={this.state.location} onChange={this.updateTrail}/>  
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