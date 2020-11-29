import React, { useEffect } from 'react';
import GigColumn from '../components/gigs/GigColumn';
import PostColumn from '../components/posts/PostColumn';
import EditProfileCard from '../components/profile/EditProfileCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import DashboardNavTwo from '../components/DashboardNavTwo';
import { getUserDashboard } from '../actions/profile';
import { getGigs } from '../actions/gig';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Popup from '../components/Popup';
import UserCard from '../components/UserCard';
import GigNav2 from '../components/GigNav2';
import GigNav1 from '../components/GigNav1';
import CreatePostContainer from '../components/posts/CreatePostContainer';
import UserCardMobile from '../components/UserCardMobile';



const Home = ({ getUserDashboard, getGigs, getPosts, auth, profile }) => {
    useEffect(() => {
        getUserDashboard();
        getPosts();
    }, [])
    
    return (
            <div className='row main__container' >
                <section className="column-secondary">
                    <UserCard />
                    <GigNav2 />
                </section>
                <section className="column-primary">
                <UserCardMobile />
                    <PostColumn />
                    </section>
                <section className='column-tertiary'>
                <GigNav1 />
                </section>
                <Popup />
            </div>
        )
}

Home.propTypes = {
    getUserDashboard: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getGigs: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getUserDashboard, getGigs, getPosts } )(Home);