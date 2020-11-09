import { SET_FORM, FORM_ERROR } from '../actions/types'

const initialState = {
    inputs: {},
    labels: {}
    error: {}
}

export default function (state= initialState, action) {
    const { type, payload } = action;

    switch( type ) {
        case SET_FORM:
            return {
                ...state,
                inputs: payload.inputs,
                labels: payload.labels
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