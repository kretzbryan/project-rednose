import React, { Fragment, useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import auth from '../../actions/auth';
import post from '../../actions/post';
import EditPostForm from '../forms/EditPostForm';
import CommentContainer from '../CommentContainer';
import Comment from '../Comment'



const PostContainer = ({post, loading}) => {
    const { name, text, _id , user, createdAt, comments } = post;
    const [editPostOpen, setEditPostOpen ] = useState(false);
    const [addCommentOpen, setAddCommentOpen ] = useState(false);
    const [postComments, setPostComments] = useState([]);

    const toggleEditPost = () => {
        setEditPostOpen(!editPostOpen)
    }
    const toggleAddPost = () => {
        setAddCommentOpen(!addCommentOpen)
    }

    useEffect(() => {
        setPostComments(comments)
    },[])

    return (
        <Fragment>
            {!loading &&
                <Fragment>
                    <section className="row card post__container">
                        <PostHeader name={name}  post={post} createdAt={createdAt}/>
                        <PostContent text={text} />
                        {!loading && post.comments.map(comment => {
                             return <Comment key={comment._id} comment={comment} loading={loading} />
                         })}
                        <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
                    </section> 
                </Fragment>
            }
        </Fragment>
)}



export default connect(null, { auth, post})(PostContainer);

/* { !editPostOpen ? (
    <div className="post">
        <PostHeader name={name}  post={post}/>
        <PostContent text={text} />
        <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
    </div>) : ( <div className="post">
                    <PostHeader name={name}  />
                    <EditPostForm post={post} toggleEditPost={toggleEditPost} />
                </div>) } */

