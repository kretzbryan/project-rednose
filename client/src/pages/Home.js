import React, { useEffect } from 'react';
import GigColumn from '../components/gigs/GigColumn';
import PostColumn from '../components/posts/PostColumn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import { getUserDashboard } from '../actions/profile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Fragment } from 'react';



const Home = ({ getUserDashboard, auth, profile }) => {
    useEffect(() => {
        getUserDashboard()
    }, [])
    return (
            <Fragment >
                <UserProfileCard />
                <PostColumn />
                <GigColumn />
            </Fragment>
        )
}

Home.propTypes = {
    getUserDashboard: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getUserDashboard } )(Home);