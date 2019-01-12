import {baseUrl} from './config'
import axios from 'axios'
import store from '../store'
import * as types from '../store/types'
import router from '../router'
import { aesencode }  from './utils';
// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.baseURL = baseUrl+'/api'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      var path = router.currentRoute.fullPath.substring(1);
      if(config.method == 'get'){
        config.params.path = encodeURIComponent(aesencode(path));
      }
      else if(config.method == 'post'){
        config.data.path = encodeURIComponent(aesencode(path));
      }
      config.headers.Authorization = `Bearer ${store.state.token.value}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        store.commit(types.LOGOUT);
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        });
    }
  }
  console.log(error)
  return Promise.reject(error.response.data);
});

export default axios;

