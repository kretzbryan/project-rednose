import React, { Fragment, useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import auth from '../../actions/auth';
import post from '../../actions/post';
import EditPostForm from '../forms/EditPostForm';
import { addPostComment } from '../../actions/comment';



const PostContainer = ({post, loading}) => {
    const { name, text, _id , user  } = post;
    const [editPostOpen, setEditPostOpen ] = useState(false);
    const [addCommentOpen, setAddCommentOpen ] = useState(false);
    const toggleEditPost = () => {
        setEditPostOpen(!editPostOpen)
    }
    const toggleAddPost = () => {
        setAddCommentOpen(!addCommentOpen)
    }

    

    return (
        <div className="post">
            {!loading &&
                <Fragment>
                    <PostHeader name={name}  post={post}/>
                    <PostContent text={text} />
                    <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
                </Fragment>}
        </div>
)}


export default connect(null, { auth, post, addPostComment })(PostContainer);

/* { !editPostOpen ? (
    <div className="post">
        <PostHeader name={name}  post={post}/>
        <PostContent text={text} />
        <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
    </div>) : ( <div className="post">
                    <PostHeader name={name}  />
                    <EditPostForm post={post} toggleEditPost={toggleEditPost} />
                </div>) } */