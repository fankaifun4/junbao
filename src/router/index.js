import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import User from '@/pages/User'
import Turnover from '@/pages/Turnover'
import Customers from '@/pages/Customers'
import Login from '@/pages/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/admin/info',
      name: 'home',
      component: Home
    },
    {
      path: '/admin/user',
      name: 'user',
      component: User
    },
    {
      path: '/turnover',
      name: 'turnover',
      component: Turnover
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
