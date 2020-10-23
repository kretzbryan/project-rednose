import React from 'react';
import Header from '../components/Header'
import About from '../components/landing/About';
import Footer from '../components/Footer';
import Register from '../components/landing/Register';
import Login from '../components/landing/Login';
import Alert from '../components/forms/Alert';
import Popup from '../components/Popup';
import bannerImage1 from '../../public/images/andrea-dillon.jpg';
import bannerImage2 from '../../public/images/david-nguyen-lyra.jpg';
import bannerImage3 from '../../public/images/joey-moore.jpg';
import bannerImage4 from '../../public/images/straps-pic.jpg';

const Landing = () => (
        <div className="landing__container">
            <div className="image-banner">
                <div className="image-container">
                    <img src={bannerImage1} alt="" className="image-banner__image"/>
                </div>
                <div className="image-container">
                    <img src={bannerImage2} alt="" className="image-banner__image"/></div>
                <div className="image-container">
                    <img src={bannerImage3} alt="" className="image-banner__image"/>
                </div>
                <div className="image-container">
                    <img src={bannerImage4} alt="" className="image-banner__image"/>
                </div>
            </div>
            <About />
            <Alert />
            <Popup />
        </div>
    )

export default Landing;