import React from 'react';

const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <li key={trail._id}>
                <h3>{trail.name}</h3>
                <h5>{trail.location}</h5>
                <h5>{trail.description}</h5>
                <h5>{trail.rating}</h5>
            </li>
        )
    })
    return (
        <div>
            <h1>Trails</h1>
            <div>
            {trails}
            </div>
        </div>
    )
}

export default Trails;