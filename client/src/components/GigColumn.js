import React from 'react';
import PropTypes from 'prop-types'
import GigCard from './GigCard'
import { connect } from 'react-redux';

const GigColumn = ({ gigs, gigsLoading }) => {
    return (
        <div className="gig-section">
        {!gigsLoading && gigs.map( gig => {
            return <GigCard key={gig._id} gig={gig}/>
        } )}
            </div>
    )
}

GigColumn.propTypes = {
    gigs: PropTypes.array.isRequired,
    gigsLoading: PropTypes.bool
}

const mapStateToProps = state => ({
    gigs: state.gig.gigs,
    gigsLoading: state.gig.loading
})

export default connect(mapStateToProps)(GigColumn)
