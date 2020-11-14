import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Login from '../components/landing/Login';
import { connect } from 'react-redux';
import Form from './forms/Form';

const Popup = ({ form: { name } }) => {
    const [formName, setFormName] = useState([]);

    useEffect(() => {
        setFormName(name);
    })


    return (
        <div className='popup' id={formName}>
            <div className="popup__content">
                <div className="popup__header">
                    <a href="#" className="popup__close">&times;</a>
                    <h3 className='popup__header--text'>Sign In</h3>
                </div>
                {formName && <Form />}
            </div>
        </div>
    )
}

Popup.propTypes = {
    form: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    form: state.form
})

export default connect(mapStateToProps)(Popup)

