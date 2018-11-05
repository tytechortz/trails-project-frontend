import React from 'react';

const EditTrail = (props) => {

    return (
        <div>
            <h4>Edit Trail</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Name: 
                    <br/>
                    <input type='text' name='name' value={props.trailToEdit.name} onChange={props.handleEditChange} />
                </label>
                <label>
                    Edit Location: 
                    <br/>
                    <input type='text' name='location' value={props.trailToEdit.location} onChange={props.handleEditChange} />
                </label>
                <label>
                    Edit Description:
                    <br/> 
                    <input type='text' name='description' value={props.trailToEdit.description} onChange={props.handleEditChange} />
                </label>
                <label>
                    Edit Rating:
                    <br/> 
                    <input type='number' name='rating' value={props.trailToEdit.rating} onChange={props.handleEditChange} />
                </label>
                <button type='submit'>Edit Trail</button>
            </form>
        </div>
       
    )
}

export default EditTrail;