import React from 'react';
import UserProfileCard from '../components/UserProfileCard';
import ProfileColumn from '../components/ProfileColumn';
import GigColumn from '../components/gigs/GigColumn';
import Popup from '../components/Popup';
import UserCard from '../components/UserCard';
import GigNav2 from '../components/GigNav2';
import GigNav1 from '../components/GigNav1';
import CreatePostContainer from '../components/posts/CreatePostContainer';
import UserCardMobile from '../components/UserCardMobile';


const Browse = () => (
    <div className="row main__container">
        <div className="column-secondary">
        <UserCard />
        <GigNav2 />
        </div>
        <div className="column-primary">
        <UserCardMobile />
        <ProfileColumn />
        </div>
        <div className="column-tertiary">
        <GigNav1 />
        </div>
    </div>
)


export default Browse;