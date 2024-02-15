import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wayu.hackathon.sparcs.net/',
  paramsSerializer: (params) => {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (Array.isArray(param)) {
        searchParams.append(key, param.join(','));
      } else {
        searchParams.append(key, param);
      }
    }
    return searchParams.toString();
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
