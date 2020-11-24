import { SET_FORM, FORM_ERROR, CLEAR_FORM } from './types';
import { registerForm, loginForm, postForm, gigForm, userForm } from '../utils/forms';

export const setLogin = () => async dispatch => {
    try {
        dispatch({
            type: SET_FORM,
            payload: loginForm
        })
    } catch (err) {
        dispatch({
            type: FORM_ERROR,
            payload: err
        })
    }
}

export const setRegister = () => async dispatch => {
    try {
        dispatch({
            type: SET_FORM,
            payload: registerForm
        })
    } catch (err) {
        dispatch({
            type: FORM_ERROR,
            payload: err
        })
    }
}

export const setEditPost = () => async dispatch => {
    try {
        dispatch({
            type: SET_FORM,
            payload: 'editPost'
        })
    } catch (err) {
        dispatch({
            type: FORM_ERROR,
            payload: err
        })
    }
}

export const clearForm = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_FORM
        })
    } catch (err) {
        dispatch({
            type: FORM_ERROR,
            payload: err
        })
    }
}
