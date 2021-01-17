import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import UploadImage from '../forms/UploadImage';

const UserCard = () => {


    return (
        <Fragment>
            <section className="row card user-card">
                <img className="user-card__image" src="/images/default.png" alt="profile image" />
                <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#profilePhotoModal"><p className ='options'>edit photo</p></a>
                <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#editModal"><p className ='options'>edit profile</p></a>
                <h5 className="card-title"></h5>
            </section>
        </Fragment>
    )
}


export default UserCard;

