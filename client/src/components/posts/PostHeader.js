
import React, { Fragment } from 'react';
import image from '../../../public/images/default.png';
import { connect } from 'react-redux';
import {setEditPost} from '../../actions/form';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago'

const PostHeader = ({ name, setEditPost, createdAt}) => (
    <Fragment>
        <header className="row profile__header post__header">
            <div className="poster__thumb">
                    <img src={image} alt="profile thumbnail" className="image__thumb" />
            </div>
            <div className="poster__name">
                <a className='anchor' href="/profile/">
                    <p className='options'>{name}</p>
                </a>
                <span className='timestamp' > 
                <TimeAgo date={createdAt}  />
                </span>
            </div>

            <div className="content-options">
                <input type="checkbox" className="content-options__checkbox" id='option-toggle<%= post._id %>'/>
                <label htmlFor="option-toggle<%= post._id %>">
                    <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
                </label>
                <nav className="content-options__nav">
                    <ul className="content-options__list">
                        <a className='content-options__link' href="#" data-target="#delete<%= post._id %>PostModal" data-toggle="modal">
                        <li className="content-options__item">
                            <i className="fas fa-trash-alt"></i><span>Delete Post</span>
                        </li>
                        </a>
                        <a className='content-options__link' href="#" onClick={setEditPost}>
                        <li className="content-options__item">
                            <i className="fas fa-user-edit"></i> <span>Edit Post</span> 
                        </li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    </Fragment>
)

PostHeader.propTypes = {
    setEditPost: PropTypes.func.isRequired
}

export default connect(null, { setEditPost })(PostHeader);

/* <div className="col-2 post__header-thumb">
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
            </div> */