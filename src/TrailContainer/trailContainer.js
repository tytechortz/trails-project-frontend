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
    }
    render(){
        return (
            <div>
                <AddTrail addTrail={this.addTrail} />
            </div>
        )
    }
}

export default TrailContainer;