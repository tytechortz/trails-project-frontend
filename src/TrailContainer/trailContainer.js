import React, { Component } from 'react';
import AddTrail from '../AddTrail/addTrail';

class MovieContainer extends Component {
    constructor(){
        super();

        this.state = {
            movies: []
        }
    }
    addTrail = async (trail) => {
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

export default MovieContainer;