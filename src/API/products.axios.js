import axios from 'axios';

export const BASE_URL = 'https://digitalinstitute-amazon.azurewebsites.net/api/'

const products = axios.create({baseURL: BASE_URL});


products.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default products;