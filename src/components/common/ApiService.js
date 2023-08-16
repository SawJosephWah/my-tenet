// apiService.js

import axios from 'axios';
import store from '../../store';
import { logout } from '../../slices/authSlice';
const apiService = axios.create({
    baseURL : '/'
});

apiService.interceptors.request.use(
    (config) => {
        const userStore = store.getState().auth;
        if (userStore) {
            config.headers['Authorization'] = `Bearer ${userStore.userInfo.access_token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            store.dispatch(logout())
        }
        return Promise.reject(error);
    }
);

export default apiService;
