import axios from 'axios'

const api = axios.create({
    baseURL: "https://62d1ccecd4eb6c69e7e3c978.mockapi.io",
  });
  
  export default api;