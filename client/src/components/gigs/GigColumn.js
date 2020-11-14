import React, { useState, useEffect, Fragment } from 'react';
import GigCard from './GigCard';
import { register } from '../../utils/forms';
import AddGigContainer from '../gigs/AddGigContainer';
import { connect } from 'react-redux';
import { getGigs } from '../../actions/gig';
import PropTypes from 'prop-types';


const GigColumn = ({ getGigs, gig: { gigs, loading } }) => {
    useEffect(() => {
       getGigs()
    }, [getGigs])
    return (
    <Fragment>
        <AddGigContainer />
        {!loading && gigs.map( gig => (
            <GigCard key={gig._id} gig={gig} />
        ))}
    </Fragment>
)}

GigColumn.propTypes = {
    getGigs: PropTypes.func.isRequired,
    gig: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    gig: state.gig
})

export default connect(mapStateToProps, { getGigs })(GigColumn);