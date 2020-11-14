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
        {!loading && posts.map(post => {
            console.log(post.user)
            return <PostContainer key={post._id} post={post} loading={loading} />
        })}
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

