import React, { Fragment, useState } from 'react';
import AddPostForm from '../forms/AddPostForm';
import image from '../../../public/images/default.png';



const CreatePostContainer = () => {
    const [formOpen, setFormOpen ] = useState(false)

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }
    
    return (
        <Fragment>
    <div className="create__post">
        <img src={image} alt="profile thumbnail" className="create__post__thumb" />
        <a onClick={toggleForm} data-toggle="modal" data-target="#addPostModal" className='create__post__anchor'>
            <p className='create__post__caption'>Say Something!</p>
        </a>
    </div>
    { formOpen === true && <AddPostForm toggleForm={ toggleForm }/> }
    </Fragment>
)}

export default CreatePostContainer;