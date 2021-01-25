import axios from 'axios';

const api = axios.create({
  baseURL: "https://restapidataview.herokuapp.com/"
});

export default api;