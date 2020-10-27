import { SET_FORM, FORM_ERROR } from './types';

export const setSignup = () => async dispatch => {
    try {
        dispatch({
            type: SET_FORM,
            payload: 'signup'
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

