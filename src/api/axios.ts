import Axios from "axios";

export const axios = Axios.create({
  baseURL: 'https://api.example.com',
  headers: {'Content-Type': 'application/json;'},
});

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});