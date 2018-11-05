import React from 'react';

const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <li key={trail._id}>
                <h3>Trail: {trail.name}</h3>
                <h5>Location: {trail.location}</h5>
                <h5>Description: {trail.description}</h5>
                <h5>Rating: {trail.rating}</h5>
            </li>
        )
    })
    return (
        <div>
            <h1>Trails</h1>
            <ul>
                {trails}
            </ul>
        </div>
    )
}

export default Trails;