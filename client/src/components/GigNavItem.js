import React from 'react';


const GigNavItem = ({gig}) => {
    return (
        <div>
            <a href="/gig/" className='gig__anchor'>
                <li className='gig__list-item' >
                    <div className="gig__thumb-container">
                        <img src='/images/default.png' alt="profile thumbnail" className="gig__thumb" />
                    </div>
                    <div className="gig__text">
                        <p className="gig__title">  {gig.title}</p> 
                        <span className='gig__subtext'>
                            24min
                        </span>
                    </div>
                </li>
            </a>
        </div>
    )
}



export default GigNavItem
