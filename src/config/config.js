let baseUrl = ''
let domainUrl=''
// process.env.NODE_ENV === 'development' ? 'dev api host' : 'prod api host' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
//
if( process.env.NODE_ENV === 'development'){
  //开发环境
  baseUrl = 'http://wx.junbao518.com'
  domainUrl = 'http://junbao.taodama.net'

}else{
  //生产环境
  baseUrl = 'http://wx.junbao518.com'
  domainUrl = 'http://wx.junbao518.com'
}
export {
  baseUrl,
  domainUrl
}
