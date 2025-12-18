import axios from 'axios';
import { envVar } from '@/helpers/constants';

const api = axios.create({
  baseURL: envVar.apiUrl,
  timeout: envVar.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        console.error('Unauthorized - redirecting to login');
      } else if (status === 403) {
        console.error('Forbidden - insufficient permissions');
      } else if (status >= 500) {
        console.error('Server error:', data.message || 'Something went wrong');
      }
    } else if (error.request) {
      console.error('Network error - no response received');
    } else {
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
