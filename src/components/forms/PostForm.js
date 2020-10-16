import React, { Fragment, useState, setState, useEffect } from 'react';
import { addPost, editPost } from '../../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostForm = ({ toggleForm, addPost, post, editPost }) => {
    const [ formData, setFormData ] = useState({
        text: post.text || '',
        name: post.name || '',
        user: post.user || '',
        id: post._id || null
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!post) {
        addPost(formData.text);
        toggleForm();
        } else {
            editPost(formData);
            toggleForm();
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <Fragment>
            <form onSubmit= {handleSubmit}>
                <textarea name="text" placeholder="Say whats on your mind..." value={formData.text} cols="45" rows="7" onChange={handleChange} required></textarea>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggleForm} >Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    );
};



export default connect(null, { addPost, editPost })(PostForm);