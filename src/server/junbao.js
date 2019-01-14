import http from '../config'
import { aesencode, aesdecode }  from '../config/utils';
let read =  encodeURIComponent(aesencode('read'))
let update = encodeURIComponent(aesencode('update'))

//获取营业额
export const mertj=()=>http.get('/cash/mertj',{ privilege:read})

//我的客户列表
export const myAgents=(page,num,searchData,pathRouter='') => http.get('/admins/children',{ page,num,...searchData,pathRouter,privilege:read})

//最近七天营业额
export const getDateData  =( uid='',search='',pathRouter='')=>http.get('/cash/statistic',{ uid,search,pathRouter,privilege:read})

//查询余额
export const moneyTotal = (uid)=>http.get('/cash/money',{uid,privilege:read})

//提现记录查询
export const moneyList = (uid,status='all',page='1',num='20')=>http.get('/cash/cashlog',{uid,status,page,num,privilege:read})

//提现
export const takecash=(money)=>http.post('/cash/takecash',{money,privilege:update})

//管理员接口
export const admins = (page,num,search,roleid='all')=>http.get('/admins',{page,num,search,roleid,privilege:read})

//人物类型查询
export const rolesLists=()=>http.get('/roles/lists',{privilege:read})
