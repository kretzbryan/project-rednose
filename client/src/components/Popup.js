import React from 'react'
import PropTypes from 'prop-types';
import Login from '../components/landing/Login'

const Popup = props => {
    return (
        <div className='popup' id='login'>
            <div className="popup__content">
                <div className="popup__header">
                    <a href="#" className="popup__close">&times;</a>
                    <h3 className='popup__header--text'>Sign In</h3>
                </div>
                <Login />
            </div>
        </div>
    )
}

Popup.propTypes = {

}

export default Popup
