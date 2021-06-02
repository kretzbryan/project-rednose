import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

const api = axios.create({
	baseURL: `${CONFIG.reactURI}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
});

// api.interceptors.response.use(
//     res => res,
//     err => {
//         if (err.response.status === 401) {
//             store.dispatch({ type: LOGOUT })
//         }
//     }
// )

export default api;
