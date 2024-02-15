import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://wayu.hackathon.sparcs.net/'
  baseURL: 'https://fc5c-49-165-90-85.ngrok-free.app',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
