import http from '../config'
//登录
export const login=(email,password)=>http.post('/login',{email,password})
