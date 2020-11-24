import { SET_FORM, FORM_ERROR, CLEAR_FORM } from '../actions/types'

const initialState = {
    name: '',
    className: '',
    buttonText: '',
    headerValue: '',
    inputs: [],
    values: {},
    error: {}
}

export default function (state= initialState, action) {
    const { type, payload } = action;

    switch( type ) {
        case CLEAR_FORM:
            return {
                ...state,
                name: '',
                className: '',
                buttonText: '',
                inputs: [],
                values: {},
                error: {}
            }
        case SET_FORM:
            return {
                ...state,
                name: payload.name,
                className: payload.className,
                buttonText: payload.buttonText,
                headerValue: payload.headerValue,
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