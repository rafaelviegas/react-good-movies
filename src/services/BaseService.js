
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE_API,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`},
});

instance.interceptors.request.use(function (config) {    
        config.url = `${config.url}?language=pt-BR`;
    return config;
});

export default instance;