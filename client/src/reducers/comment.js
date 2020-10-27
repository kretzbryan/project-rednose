import { ADD_COMMENT, COMMENT_ERROR } from '../actions/types';

const initialState = {
    comment: null,
    comments: [],
    loading: true,
    err: {}
}

export default function(state= initialState, action) {
    const { type,payload } = action

    switch(type) {
        case ADD_COMMENT:
            return {
                ...state,
                comment: payload
            }
        case COMMENT_ERROR:
            return {
                ...state,
                err: payload
            }
        default: 
            return state;
    }
}