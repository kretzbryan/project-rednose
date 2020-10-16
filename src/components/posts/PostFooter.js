import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../../actions/auth';
import { deletePost } from '../../actions/post'


const PostFooter = ({ auth , deletePost , user, id, toggleForm}) => {
    // console.log(auth.user)
    return (
    <div className='options__footer'>
            { !auth.loading && auth.user && user === auth.user._id && (
                <Fragment>
                    <button className='anchor options' onClick={ (e) => deletePost(id) } type='button'><i className="fas fa-trash-alt"></i></button>
                    <button className='anchor options' onClick={toggleForm} ><i className="fas fa-user-edit"></i></button>
                </Fragment> ) }
        </div>
)}

PostFooter.propTypes = {
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { deletePost })(PostFooter);