import axios from 'axios'
import { Indicator, Toast } from 'mint-ui';

axios.interceptors.request.use(config => {
  Indicator.open('加载中...');
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

export default axios;