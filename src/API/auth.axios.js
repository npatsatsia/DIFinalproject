import axios from 'axios';

export const BASE_URL = 'https://amazon-digital-prod.azurewebsites.net/api/'

const instance = axios.create({baseURL: BASE_URL});

// instance.interceptors.request.use(async (req) => {
//   const token = (localStorage.getItem('user')).replace(/"/g, '');
//   console.log(token)
//   req.headers = {
//       ...req.headers}
//   return req;
// })


instance.interceptors.response.use(
  response => {
    if(response.data.jwt){
        localStorage.setItem('user', JSON.stringify(response.data.jwt));
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;