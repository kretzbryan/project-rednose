import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/post'
import { addPostComment } from '../../actions/comment';
import TextareaAutosize from 'react-autosize-textarea';
 

const PostFooter = ({ auth , deletePost , user, id, toggleEditPost, addPostComment}) => {
    const [ commentData, setCommentData ] = useState({
        text:'',
        postId: id
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
        <div className='post__footer'>
            { !auth.loading && user === auth.user.user._id && (
                <Fragment>
                    <div className="comment-form">
                        <form onSubmit={handleSubmit} >

                        <TextareaAutosize className='comment-form__text' type="text" name='text' placeholder='Add a comment...' cols={60} rows={1} value={commentData.text}
                        onChange={handleChange} required />
                        <button className="btn">Submit</button>
                        </form>
                    </div>
                    <a className='anchor options' onClick={ (e) => deletePost(id) } type='button'>delete</a>
                    <a className='anchor options' onClick={toggleEditPost}>edit post</a>
                </Fragment> ) 
            }
        </div>
)}

PostFooter.propTypes = {
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { deletePost })(PostFooter);