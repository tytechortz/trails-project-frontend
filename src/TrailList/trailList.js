import React from 'react';

const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <li key={trail._id}>
                <h3>{trail.name}</h3>
                <h5>{trail.location}</h5>
                <h5>{trail.description}</h5>
                <h5>{trail.rating}</h5>
                <button onClick ={props.openAndEdit.bind(null, trail)}>Edit Trail</button>
                <button onClick={props.deleteTrail.bind(null, trail._id)}>Delete Trail</button>  
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