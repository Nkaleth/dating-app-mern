import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dating-mern-be-728637c46f8e.herokuapp.com',
});

export default instance;
