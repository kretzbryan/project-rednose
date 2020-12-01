
import React, {useEffect, useState} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { editPostComment } from '../../actions/post';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EditCommentForm = ({text, commentId, postId, editPostComment, toggleForm}) => {
    const [commentData, setCommentData] = useState({
        text,
        commentId,
        postId
    })


    const handleChange = (e) => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editPostComment(commentData);
        toggleForm();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextareaAutosize type='text' onChange={handleChange} cols={40} name='text' rows={1} value={commentData.text}/>
                <button type="submit" value="Add Comment">Edit Comment</button>
            </form>
        </div>
    )
}

EditCommentForm.propTypes = {
    editPostComment: PropTypes.func.isRequired
}

export default connect(null, {editPostComment})(EditCommentForm)
