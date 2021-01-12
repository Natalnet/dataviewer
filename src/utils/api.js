import axios from 'axios';

const api = axios.create({
  baseURL: "http://restapidataview.herokuapp.com/"
});

export default api;