import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <li key={trail._id}>
                <h5>Name: {trail.name}</h5>
                <h5>Location: {trail.location}</h5>
                <h5>Info: {trail.description}</h5>
                <h5>Rating: {trail.rating}/5</h5>
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