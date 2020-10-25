import React from 'react';
import image from '../../../public/images/default.png';


const PostHeader = ({ name }) => (
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
                <a className='options__anchor' href="#">
                    <i className="icon-basic-gear" aria-hidden="true"></i>
                </a>
            </div>
        </div>
)

export default PostHeader;