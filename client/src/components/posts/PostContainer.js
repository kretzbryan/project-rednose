import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import auth from '../../actions/auth';
import post from '../../actions/post';
import EditPostForm from '../forms/EditPostForm';



const PostContainer = ({post}) => {
    const { name, text, _id , user  } = post;
    const [formOpen, setFormOpen ] = useState(false);
    
    const toggleForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <div>
    { !formOpen ? (
        <div className="post">
            <PostHeader name={name}  />
            <PostContent text={text} />
            <PostFooter id={_id} user={user} toggleForm={toggleForm}/>
        </div>) : ( <div className="post">
                        <PostHeader name={name}  />
                        <EditPostForm post={post} toggleForm={toggleForm} />
                    </div>) }
    </div>
)}

PostContainer.propTypes = {
    post: PropTypes.object.isRequired
}

export default connect(null, { auth, post})(PostContainer);