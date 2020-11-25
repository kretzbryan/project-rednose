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
import Spinner from '../Spinner';



const PostContainer = ({post, loading}) => {
    const { name, text, _id , user, createdAt, comments } = post;


    return (
        <Fragment>
        <section className="row card post__container">
            {!loading &&  (
                <Fragment>
                        <PostHeader name={name}  post={post} createdAt={createdAt}/>
                        <PostContent text={text} />
                        {!loading && comments.map(comment => {
                             return <Comment key={comment._id} comment={comment} loading={loading} />
                         })}
                        <PostFooter id={_id} user={user} toggleEditPost={toggleEditPost}/>
                </Fragment>)
                
            }
             </section> 
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

