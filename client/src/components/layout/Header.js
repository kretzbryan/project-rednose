import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import React, { useState, Fragment } from 'react';
import { setLogin, setRegister, setAddGig } from '../../actions/form';
import { useEffect } from 'react';
import { getUserProfile } from '../../actions/profile';

const Header = ({
	auth: { isAuthenticated, loading, user },
	logout,
	setLogin,
	setRegister,
	getUserProfile,
	setAddGig,
}) => {
	const authLinks = (
		<Fragment>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<a className='nav-link' href='/home'>
						Home{' '}
					</a>
				</li>
				{!loading && !!user && (
					<li className='nav-item'>
						<a className='nav-link' href={`/profile/${user.user._id}`}>
							{' '}
							View Profile
						</a>
					</li>
				)}
				<li className='nav-item'>
					<a className='nav-link' href='/browse'>
						Browse Profiles
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='#gigForm' onClick={setAddGig}>
						Add Gig
					</a>
				</li>
				<li className='nav-item'>
					<a href='/' className='nav-link' onClick={logout}>
						Log Out
					</a>
				</li>
			</ul>
		</Fragment>
	);

	return (
		<Fragment>
			<nav className='navbar'>
				<h1 className='navbar-brand' href='#'>
					Cirque-Connections
				</h1>
				<div className='navbar-collapse'>
					{isAuthenticated && !loading ? authLinks : null}
				</div>
			</nav>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	setLogin: PropTypes.func.isRequired,
	setRegister: PropTypes.func.isRequired,
	getUserProfile: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, {
	logout,
	setLogin,
	setRegister,
	getUserProfile,
	setAddGig,
})(Header);
