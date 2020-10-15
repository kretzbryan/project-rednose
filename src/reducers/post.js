import { GET_POSTS, ADD_POST, REMOVE_POST, EDIT_POST, POST_ERROR, DELETE_POST} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

export default function( state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload
            };
        case GET_POSTS:
            return {
                ...state,
                posts: [...payload],
                loading: false
            }
        default: 
            return state;
    }
}