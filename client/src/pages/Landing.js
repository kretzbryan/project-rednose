import React from 'react';
import Header from '../components/layout/Header'
import About from '../components/landing/About';
import Footer from '../components/layout/Footer';
import Register from '../components/landing/Register';
import Login from '../components/landing/Login';
import Alert from '../components/forms/Alert';
import Popup from '../components/layout/Popup';
import bannerImage1 from '../../public/images/andrea-dillon.jpg';
import bannerImage2 from '../../public/images/david-nguyen-lyra.jpg';
import bannerImage3 from '../../public/images/joey-moore.jpg';
import bannerImage4 from '../../public/images/straps-pic.jpg';
import Carousel from '../components/Carousel';

const Landing = () => (
        <div className="landing__container">
            <Carousel />
            <About />
            <Alert />
            <Popup />
        </div>
    )

export default Landing;