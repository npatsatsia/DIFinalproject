import axios from 'axios';

export const BASE_URL = 'https://amazon-digital-prod.azurewebsites.net/api/';

const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(async (req) => {
  const token = JSON.parse(localStorage.getItem('user'));
  req.headers = {
    ...req.headers,
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return req;
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data.jwt));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
