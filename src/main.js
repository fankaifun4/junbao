// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store'
import './libs/flexible'
import 'iview/dist/styles/iview.css';
import {checkToken} from './config/ajax'
import filters from './filters'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Vue.prototype.checkToken = checkToken
Vue.config.productionTip = false




let  hasURL=function(url){
  let userInfo = store.state.userInfo
  let type = store.state.userInfo.type
  let status =store.state.userInfo.status
  let permission =  userInfo.roles[0].permissions
  let  isTrue =false
  for(var i=0;i<permission.length;i++){
    if(permission[i].desc == url ){
      isTrue=true
      break
    }
  }
  return isTrue
}
Vue.prototype.hasURL = hasURL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
