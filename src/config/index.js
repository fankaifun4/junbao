import http from './http'

function post(url,data){
  return http.request({
      url,
      data,
      method:'post',
  })
}

function get(url,data){
  return http.request({
    url,
    params: data,
    method:'get',
  })
}

export default {
  post,
  get
}
