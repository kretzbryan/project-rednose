import React from  'react';
import image from '../../public/images/default.png';

const UserProfileCard = () => (
    <div className="card dashboard-profile-card">
        <img className='dashboard-profile-card__image' src={image} alt="profile image"/>
        <div className="dashboard-profile-card__edit">
            <div className="dashboard-profile-card__edit__container">
                <a  href="#"  className='edit__anchor' ><p className='options'>edit photo</p></a>
                <a  href="#" className='edit__anchor' ><p className='options'>edit profile</p></a>
            </div>
        </div>
        <div className="dashboard-nav">
            <div className="row dashboard-nav__row">
                <div className="col-1-of-2 dashboard-nav__col-1-of-2 mr-2">
                    <ul className="dashboard-nav--social">
                        <li className="dashboard-nav--social__item">Connections</li>
                        <li className="dashboard-nav--social__item">Messages</li>
                        <li className="dashboard-nav--social__item">Bookmarks</li>
                    </ul>
                </div>
                <div className="col-1-of-2 dashboard-nav__col-1-of-2 ml-2">

                <li className="dashboard-nav--social__item">Saved Gigs</li>
                <li className="dashboard-nav--social__item">Events</li>
                <li className="dashboard-nav--social__item">Notifications</li>
                </div>
            </div>
        </div>
    </div>
)

export default UserProfileCard;