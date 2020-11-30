import React from 'react';
import GigColumn from '../components/gigs/GigColumn';
import PostColumn from '../components/posts/PostColumn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import { connect } from 'react-redux';
import auth from '../actions/auth';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UserCardMobile from '../components/UserCardMobile'
import { useParams } from 'react-router-dom';
import {getUserProfile} from '../actions/profile';
import ProfileCard from '../components/ProfileCard';
import GigNav1 from '../components/GigNav1';
import GigNav2 from '../components/GigNav2';
import { getPosts } from '../actions/post';
import Popup from '../components/Popup';


const ProfileDetail = ({ getUserProfile, getPosts, auth, profile: { profile, loading }}) => {
    let { id } = useParams();

    useEffect(() => {
        getUserProfile(id);
        getPosts(id);
    },[])

    return (
        <div className="row main__container">
            <div className="column-secondary">
                {!loading && <ProfileCard  />}
                <GigNav2 />
            </div>
            <div className="column-primary">
                <UserCardMobile />
                <PostColumn />
            </div>
            <div className="column-tertiary">
                <GigNav1 />
                <Popup />
            </div>
        </div>
    )
}

ProfileDetail.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    post: state.post
})

export default connect(mapStateToProps, {getUserProfile, getPosts})(ProfileDetail);