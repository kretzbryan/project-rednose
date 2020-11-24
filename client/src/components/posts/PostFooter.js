import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/post'
import { addPostComment } from '../../actions/post';
import TextareaAutosize from 'react-autosize-textarea';
 

const PostFooter = ({ auth , deletePost , loading, user, id, toggleEditPost, addPostComment}) => {
    const [ commentData, setCommentData ] = useState({
        text:'',
        id: id
    })
    const handleChange = e => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addPostComment(commentData);

    }
    return (
        <Fragment>
            <div className="row comment-form">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addPostComment(commentData);
                }} >

                <TextareaAutosize className='comment-form__text' type="text" name='text' placeholder='Add a comment...' cols={50} rows={1} value={commentData.text}
                onChange={handleChange} required />
                <button type="submit" value="Add Comment">Add Comment</button>
                </form>
            </div>
        </Fragment>
)}

PostFooter.propTypes = {
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    addPostComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    loading: state.post.loading
})
export default connect(mapStateToProps, { deletePost, addPostComment })(PostFooter);