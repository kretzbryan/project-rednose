import { ADD_COMMENT, COMMENT_ERROR } from './types';
import api from '../utils/api';

export const addPostComment = ({ text, postId }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = { text, postId };

    try {
        const res = await api.post('comment', body, config)
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT-ERROR,
            payload: res.data
        })
    }
}