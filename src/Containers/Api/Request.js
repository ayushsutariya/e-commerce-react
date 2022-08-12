import axios from "axios";
import { BASE_URL } from "../../BaseUrl";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
    headers: {
      'Content-Type': 'application/json',
    }
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

  export const postRequest = (path, data) => {
    return axiosRequest ({
      url : path,
      method : 'POST',
      data: JSON.stringify(data)
    })
  }

  export const deleteRequest = (path, id) => {
    return axiosRequest ({
      url : path ,
      method : 'DELETE',
    })
  }