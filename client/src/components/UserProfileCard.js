import React from  'react';
import image from '../../public/images/default.png';

const UserProfileCard = () => (
    <div className="card dashboard-profile-card">
        <img className='dashboard-profile-card__image' src={image} alt="profile image"/>
        <a  href="#"  ><p className ='options'>edit photo</p></a>
        <a  href="#" ><p className ='options'>edit profile</p></a>
        <h5 className="card-title"></h5>
    </div>
)

export default UserProfileCard;