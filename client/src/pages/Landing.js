import React from 'react';
import Header from '../components/Header'
import About from '../components/landing/About';
import Footer from '../components/Footer';
import Register from '../components/landing/Register';
import Login from '../components/landing/Login';
import Alert from '../components/forms/Alert';
import Popup from '../components/Popup';

const Landing = () => (
        <div className="landing__container">
            <About />
            <Alert />
            <Register />
            <Popup />
        </div>
    )

export default Landing;