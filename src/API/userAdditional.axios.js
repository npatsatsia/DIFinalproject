import axios from 'axios';

export const BASE_URL = 'https://digitalinstitute-amazon.azurewebsites.net/api/'

const instance = axios.create({baseURL: BASE_URL});

instance.interceptors.request.use(async (req) => {
  const token = JSON.parse(localStorage.getItem('user'));
  req.headers = {
      ...req.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  }
  return req;
})


instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;