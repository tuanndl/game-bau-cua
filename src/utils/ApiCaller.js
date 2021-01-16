import axios from 'axios';

const ApiCaller = axios.create({
  baseURL: 'https://gateway.tuanndl.com/api/v1/',
  //   baseURL: 'http://localhost:9000/api/v1/',
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
  },
});

ApiCaller.interceptors.request.use(function (config) {
  // handel token
  return config;
});

// Add a response interceptor
ApiCaller.interceptors.response.use(
  function (response) {
    return response.data || response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default ApiCaller;
