import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'
import React, { useState, Fragment } from 'react';
import { setSignup } from '../actions/form';


const Header = ({ auth: { isAuthenticated, loading, user}, logout, setSignup }) => {

    const authLinks = (
        <Fragment>
            <ul className='nav__list'>
                <li className="nav__item">
                    <a className="nav__link" href="/home">Home  </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link"  href='#' > View Profile</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/browse">Browse Profiles</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link" onClick={logout} >Log Out</a>
                </li>
            </ul>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <ul className='nav__list'>
                <li className="nav__item">
                    <a className="nav__link" href='#login'>Login</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href='#login' onClick={() => setSignup()} >Sign Up</a>
                </li>
            </ul>
        </Fragment>
    )
        return (
            <div className='nav'>
                { isAuthenticated && !loading ? authLinks : guestLinks }
            </div>
        )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,

})

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    setSignup: PropTypes.func.isRequired
}
export default connect(mapStateToProps, { logout, setSignup })(Header)