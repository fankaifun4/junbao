import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import User from '@/pages/User'
import Turnover from '@/pages/Turnover'
import Customers from '@/pages/Customers'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
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
    }
  ]
})
