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



const Home = ({ getUserDashboard, getGigs, getPosts, auth, profile }) => {
    useEffect(() => {
        getUserDashboard();
        getGigs();
        getPosts();
    }, [])
    
    return (
            <div className='row dashboard' >
            <section className="dashboard__column--1">
                <EditProfileCard />
                <DashboardNavTwo />
                </section>
                <section className="dashboard__column--2">
                    <UserProfileCard />
                    <PostColumn />
                    </section>
                <section className='dashboard__column--3'>
                <GigColumn />
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