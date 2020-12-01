import api from '../utils/api';
import { ADD_POST, REMOVE_POST, EDIT_POST, POST_ERROR, GET_POST, GET_POSTS, DELETE_POST, ADD_COMMENT, COMMENT_ERROR, EDIT_COMMENT } from './types';

export const addPost = (text) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ text })
    try {
        const res = await api.post('post', body, config);
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err
        })
    }
}

export const getPosts = (profileId= '') => async dispatch => {
    if (profileId === true) {
        try {
            const res = await api.get(`post/user/${profileId}`);
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err
            })
        }
    } else {
        try {
            const res = await api.get(`post`);
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err
            })
        }
    }
    
}

export const deletePost = id => async dispatch => {
    try {
        const res =  await api.delete(`post/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err
        })
    }
}

export const getCurrentPost = ( id ) => async dispatch => {
    try {

        const res = await api.get(`post/${id}`)

        dispatch({
            type: GET_POST,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err
        })
    }
}

export const editPost = ( post ) => async dispatch => {
    const body = JSON.stringify(post)

    try {
        const res =  await api.put(`post/${post.id}`, body)
        dispatch({
            type: EDIT_POST,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err
        })
    }
}

export const addPostComment = ({ text, id }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = { text };

    try {
        const res = await api.post(`post/${id}/comment`, body, config)
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: err
        })
    }
}

export const editPostComment = ({text, postId, commentId}) => async dispatch => {
    const body = { text };

    try {
        const res = await api.put(`post/${postId}/comment/${commentId}`, body);
        console.log('editpost res', res)
        dispatch({
            type: EDIT_COMMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: err
        })
    }
}

export const deletePostComment = (id) => async dispatch => {
    try {
        const res = await api.delete(`comment/${id}`);

        dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: err
        })
    }
}