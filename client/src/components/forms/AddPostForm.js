import React, { Fragment, useState, setState, useEffect } from 'react';
import { addPost, editPost } from '../../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddPostForm = ({ toggleForm, addPost}) => {
    const [ text, setText ] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(text);
        toggleForm();
    }

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }
    

    return (
        <div className='add-post'>
            <form onSubmit= {handleSubmit} c>
                <textarea name="text" placeholder="Say whats on your mind..." value={text} cols="45" rows="7" onChange={handleChange} required></textarea>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggleForm} >Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </div>
    );
};

AddPostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost, editPost })(AddPostForm);