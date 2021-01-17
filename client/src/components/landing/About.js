import React, { Fragment } from 'react';

const About = () => (
        <Fragment>
        <section className='about'>
            <header className='about__title'>
                <h4 className='about__title__text'>Who We Are...</h4>
            </header>
            <div className="row about__main">
                <div className="col-sm-4 about__column">
                    <p className='about__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, possimus nemo. Saepe commodi ut eaque ipsum provident alias nobis non laudantium eveniet. Ratione, molestiae temporibus! In unde alias velit laudantium?</p>
                </div>
                <div className="col-sm-4 about__column">
                    <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias optio veniam vero numquam temporibus consequuntur repudiandae voluptates laboriosam commodi? Quos quod aut sit omnis explicabo dolore fugiat voluptate libero.</p>
                </div>
                <div className="col-sm-4 about__column">
                    <p className='about__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur dolore doloremque ex asperiores aperiam ratione optio quisquam placeat debitis, odit eveniet aspernatur neque quae eos eum assumenda cum accusantium.</p> 
                </div>
            </div>
        </section>
        </Fragment>
    )

export default About;