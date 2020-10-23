import { SET_FORM, FORM_ERROR } from '../actions/types'

const initialState = {
    name: null,
    error: {}
}

export default function (state= initialState, action) {
    const { type, payload } = action;

    switch( type ) {
        case SET_FORM:
            return {
                ...state,
                name: payload
            }
        case FORM_ERROR: 
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}