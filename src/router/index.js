import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios' // 用于向服务器进行http请求
import Index from '@/pages/index'
import MovieList from '../pages/moviesList'
import MovieDetail from '../pages/movieDetail'
import Login from '../pages/login'
import Register from '../pages/register'
import FindPass from '../pages/findPass'
import UserInfo from '../pages/userInfo'
import UserId from '../pages/userid'

Vue.use(Router)
Vue.use(axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movieList',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/movieDetail',
      component: MovieDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/findPass',
      component: FindPass
    },
    {
      path: '/userInfo',
      component: UserInfo
    },
    {
      path: '/userId',
      component: UserId
    }
  ]
})
