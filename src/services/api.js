import axios from 'axios';
import { getStorage } from '../utils/storage';
/**
 * Instance of axios
 * @returns { methods }
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_BFF_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
  },
});

export const bffUrl = process.env.REACT_APP_BFF_URL;

// TODO: send token through here with proper BFF
// api.interceptors.request.use((config) => {
//   const token = getStorage('accessToken');
//   const headers = {
//     ...config.headers,
//     Authorization: token ? `Bearer ${token}` : '',
//   };
//   const newConfig = {
//     ...config,
//     headers,
//   };
//   return newConfig;
// });

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
