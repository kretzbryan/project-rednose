import React, { Fragment } from 'react';
import Button from '../layout/Button';

const DashboardNav = () => {
	return (
		<Fragment>
			<h4 className='dashboard-title'>
				<i class='fas dashboard-icon fa-bars'></i>Dashboard
			</h4>
			<hr className='dashboard-line' />
			<Button
				classNames='dashboard-btn'
				icon={<i class='far dashboard-icon fa-bell'></i>}
				buttonText='Notifications'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-envelope-open'></i>}
				buttonText='Messages'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-calendar-alt'></i>}
				buttonText='Events'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='far dashboard-icon fa-money-bill-alt'></i>}
				buttonText='Gigs'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='far dashboard-icon fa-plus-square'></i>}
				buttonText='Following'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-users'></i>}
				buttonText='Friends'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-search'></i>}
				buttonText='Discover'
			/>
			<h4 className='dashboard-title'>
				<i class='fas dashboard-icon fa-id-card'></i>Profile
			</h4>
			<hr className='dashboard-line' />
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-sign-out-alt'></i>}
				buttonText='Log Out'
			/>
			<Button
				classNames='dashboard-btn'
				icon={<i class='fas dashboard-icon fa-cogs'></i>}
				buttonText='Settings'
			/>
		</Fragment>
	);
};

export default DashboardNav;
