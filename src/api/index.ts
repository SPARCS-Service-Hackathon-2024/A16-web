import axios from 'axios';

const api = axios.create({ baseURL: 'https://wayu.hackathon.sparcs.net/' });

export default api;
