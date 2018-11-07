import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';




const Trails = (props) => {
    const trails = props.trails.map((trail, i) => {
        return (
            <li key={trail._id}>
<<<<<<< HEAD
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Info</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trail.name}</td>
                        <td>{trail.location}</td>
                        <td>{trail.description}</td>
                        <td>{trail.rating}/5</td>
                    </tr>
                </tbody>
                </Table>
                <Button color="primary" size="sm" onClick ={props.openAndEdit.bind(null, trail)}>Edit</Button>{' '}
                <Button color="secondary" size="sm" onClick={props.deleteTrail.bind(null, trail._id)}>Delete</Button>
=======
                <h5>Name: {trail.name}</h5>
                <h5>Location Latitude: {trail.locationLat}</h5>
                <h5>Location Longitude: {trail.locationLon}</h5>
                <h5>Info: {trail.description}</h5>
                <h5>Rating: {trail.rating}/5</h5>
                <button onClick ={props.openAndEdit.bind(null, trail)}>Edit Trail</button>
                <button onClick={props.deleteTrail.bind(null, trail._id)}>Delete Trail</button>  
>>>>>>> dbb619ba0e58b63a1f4bd64719f2d04d16ce9c46
            </li>
        )
    })
    return (
        <div>
            <h3>Trails</h3>
                {trails}
        </div>
    )
}

export default Trails;
