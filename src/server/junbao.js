import http from '../config'
import { aesencode, aesdecode }  from '../config/utils';
//获取营业额
export const mertj=()=>http.get('/cash/mertj',{ privilege: encodeURIComponent(aesencode('read'))})

//我的客户列表
export const myAgents=(page,num,searchData) => http.get('/admins/children',{ page,num,...searchData,privilege: encodeURIComponent(aesencode('read'))})

//最近七天营业额
export const getDateData  =( uid='',search='')=>http.get('/cash/statistic',{ uid,search,privilege: encodeURIComponent(aesencode('read'))})
