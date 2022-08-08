import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004/userdata',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export const axiosRequest = (config) => {
    return instance.request(config)
  }

  export const getRequest = (path) => {
    return axiosRequest ({
      url : path,
      method : 'GET'
    })
  }