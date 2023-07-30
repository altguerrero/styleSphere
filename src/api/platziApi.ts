import axios from 'axios';

const platziApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
});

export default platziApi;
