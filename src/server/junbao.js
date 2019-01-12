import http from '../config'
import { aesencode, aesdecode }  from '../config/utils';
//获取营业额
export const mertj=()=>http.get('/cash/mertj',{ privilege: encodeURIComponent(aesencode('read'))})
