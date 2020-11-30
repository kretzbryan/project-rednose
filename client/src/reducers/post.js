import { GET_POSTS, ADD_POST, REMOVE_POST, EDIT_POST, POST_ERROR, DELETE_POST, GET_POST, ADD_COMMENT, DELETE_COMMENT, COMMENT_ERROR} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

export default function( state = initialState, action) {
    const {type, payload} = action;
    console.log(type, payload)
    switch(type) {
        case EDIT_POST:
            const updatedPost = state.posts.find(post => post._id === payload._id);
            return {
                ...state,
                posts: [
                    {...updatedPost, text: payload.text},
                    ...state.posts.filter(post => post !== updatedPost)
                ]
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            }
        case ADD_COMMENT:
            console.log(payload.post)
            const updatedComments = state.posts.find(post => post._id === payload.post._id)
            return {
                ...state,
                posts: [
                        {...payload.post},
                    ...state.posts.filter(post => post !== updatedComments)
                ]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload._id),
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload
            }; 
        case COMMENT_ERROR: 
            return {
                ...state,
                error:payload
            }
        
        case GET_POSTS:
            return {
                ...state,
                posts: [...payload],
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        default: 
            return state;
    }
}