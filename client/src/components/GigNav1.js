import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import image from '../../public/images/default.png';

const GigNav1 = () => {
    return (
        <Fragment>
            <section className="row card gig__container">
            <header className='gig__header'>Recent Gigs</header>
                <ul className='gig__list' >
                    <a href="/gig/" className='gig__anchor'>
                        <li className='gig__list-item' >
                            <div className="gig__thumb-container">
                                <img src={image} alt="profile thumbnail" className="gig__thumb" />
                            </div>
                            <div className="gig__text">
                                <p className="gig__title">  This is A Gig Title</p> 
                                <span className='gig__subtext'>
                                    24min
                                </span>
                            </div>
                        </li>
                    </a>
                </ul>
                <footer className='gig__footer' >
                    <a className='gig__link-all' href="/gigs"> See More </a>
                </footer>
            </section>
        </Fragment>
    )
}



export default GigNav1;

