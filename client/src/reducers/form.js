import { SET_FORM, FORM_ERROR } from '../actions/types'

const initialState = {
    name: '',
    className: '',
    buttonText: '',
    inputs: [],
    values: {},
    error: {}
}

export default function (state= initialState, action) {
    const { type, payload } = action;

    switch( type ) {
        case SET_FORM:
            return {
                ...state,
                name: payload.name,
                className: payload.className,
                buttonText: payload.buttonText,
                inputs: payload.inputs,
                values: payload.values
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