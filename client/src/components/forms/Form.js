import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Form = ({ form: {inputs, labels}}) => {

    const generateForm = () => {
        inputs.map(input => {
            return
        })
    }

    return (
        <div>
            
        </div>
    )
}

Form.propTypes = {
    form: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    form: state.form
})

export default connect()(Form)
