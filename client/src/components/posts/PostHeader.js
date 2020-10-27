
import React from 'react';
import image from '../../../public/images/default.png';
import { connect } from 'react-redux';
import {setEditPost} from '../../actions/form';
import PropTypes from 'prop-types'

const PostHeader = ({ name, setEditPost }) => (
    <div className="row post__header">
            <div className="col-2 post__header-thumb">
                <img src={image} alt="" className="image__thumb" />
            </div>
            <div className="col-8 post__header-name">
                <a className='anchor' href="/profile/<%= post.author._id %>">
                    <p className='options'>{name}</p>
                </a>
            </div>
            <div className="col-2 post__header-options">
                <a className='anchor options' onClick={ (e) => deletePost(id) } type='button'>delete</a>
                <a className='anchor options' href='#editPost' onClick={() => setEditPost()}>edit post</a>
            </div>
        </div>
)

PostHeader.propTypes = {
    setEditPost: PropTypes.func.isRequired
}

export default connect(null, { setEditPost })(PostHeader);