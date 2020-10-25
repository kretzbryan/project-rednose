import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/post'


const PostFooter = ({ auth , deletePost , user, id, toggleForm}) => {
    // console.log(auth.user)
    return (
    <div className='post__footer'>
            { !auth.loading && user === auth.user.user._id && (
                <Fragment>
                    <a className='anchor options' onClick={ (e) => deletePost(id) } type='button'>delete</a>
                    <a className='anchor options' onClick={toggleForm}>edit post</a>
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