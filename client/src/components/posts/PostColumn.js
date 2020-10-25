import React,{ useState, useEffect, Fragment } from 'react';
import { getPosts } from '../../actions/post';
import CreatePostContainer from './CreatePostContainer';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const PostColumn = ({ getPosts, post: { posts, loading} }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
    <Fragment>
        <CreatePostContainer />
        {posts.map(post => (
            <PostContainer key={post._id} post={post} />
        ))}
    </Fragment>
)}

PostColumn.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect( mapStateToProps, { getPosts } )(PostColumn);

/* 
{posts.map(post => (
    <PostContainer key={post._id} post={post} />
))} */

