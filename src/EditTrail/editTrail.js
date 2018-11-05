import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const EditTrail = (props) => {

    return (
        <div>
            <h4>Edit Trail</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Name: 
                    <input type='text' name='name' value={props.trailToEdit.name} onChange={props.handleEditChange} />
                </label>
                <label>
                    Location: 
                    <input type='text' name='location' value={props.trailToEdit.location} onChange={props.handleEditChange} />
                </label>
                <label>
                    Description:
                    <input type='text' name='description' value={props.trailToEdit.description} onChange={props.handleEditChange} />
                </label>
                <label>
                    Rating:
                    <input type='number' name='rating' value={props.trailToEdit.rating} onChange={props.handleEditChange} />
                </label>
                <button type='submit'>Edit Trail</button>
            </form>
        </div>
       
    )
}

export default EditTrail;