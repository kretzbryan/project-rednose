import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/user/UserCard';
import DashboardNav from '../components/user/dashboard/DashboardNav';
import GigNav2 from '../components/gig/GigNav2';
import UserCardMobile from '../components/user/UserCardMobile';
import PostColumn from '../components/post/PostColumn';
import MediaCard from '../components/MediaCard';

import { getUserDashboard } from '../actions/profile';
import { connect } from 'react-redux';
import EventCard from '../components/event/EventCard';
const EventBrowse = ({ getUserDashboard }) => {
	useEffect(() => {
		getUserDashboard();
	}, []);
	return (
		<Fragment>
			<div className='row main__container'>
				<section className='column-secondary'>
					<UserCard />
					<DashboardNav />
					<GigNav2 />
				</section>
				<section className='column-primary'>
					<UserCardMobile />
					<EventCard />
				</section>
			</div>
		</Fragment>
	);
};
EventBrowse.propTypes = {
	getUserDashboard: PropTypes.func.isRequired,
};

export default connect(null, { getUserDashboard })(EventBrowse);
