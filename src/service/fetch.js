import {baseURL} from '../config/baseURL';
import axios from 'axios';

/*global configuration*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseURL;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return Promise.reject({
      error: error.response.data.msg,
      status: error.response.status,
      statusText: error.response.statusText
    })
  } else if (error.request) {
    // The request was made but no response was received
    return Promise.reject(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    return Promise.reject(error.message)
  }
});


export default async (type = 'GET', url = '', data = {}, config = {}) => {
  // 提示： 这里的url填相对路径 例如'/test/example'
  type = type.toUpperCase();
  
  /*FOR POST*/
  if (type === 'POST') {
    return axios.post(url, JSON.stringify(data) == '{}' ? '' : data);
  }
  
  /*FOR DELETE*/
  if (type === 'DELETE') {
    return axios.delete(url)
  }
  
  /*FOR PUT*/
  if (type === 'PUT') {
    return axios.put(url, JSON.stringify(data) == '{}' ? '' : data, {
      headers:{
        'Content-Type':"application/json"
      }
    })
  }
  
}

console.log('ths request basic URL is', baseURL);





