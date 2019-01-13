import Vue from 'vue'
import Router from 'vue-router'
const Index=()=>import(/* webpackChunkName: "Index" */ '@/pages/Index')
const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/Home')
const User = () => import(/* webpackChunkName: "User" */ '@/pages/User')
const Turnover = () => import(/* webpackChunkName: "Turnover" */ '@/pages/Turnover')
const Customers = () => import(/* webpackChunkName: "Customers" */ '@/pages/Customers')
const Money = () => import(/* webpackChunkName: "Customers" */ '@/pages/Cashlog')
const Login = () => import(/* webpackChunkName: "Login" */ '@/pages/Login')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      component:Index,
      children:[
        {
          path: '',
          redirect:'admin/info'
        },
        {
          path: 'admin/info',
          name: 'home',
          component: Home
        },{
          path: '/admin/myagents',
          name: 'customers',
          component: Customers
        },
        {
          path: '/admin/cashlog',
          name: 'money',
          component: Money
        }
      ]
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/login'
    }
  ]
})
