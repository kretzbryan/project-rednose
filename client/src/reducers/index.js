import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import gig from './gig';
import form from './form';
import comment from './comment';

export default combineReducers({
    alert,
    auth,
    profile,
    post,
    gig,
    form,
    comment
})