import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './home' //首页模块路由
import login from './login' //登录(包含注册)模块路由
import personal from './personal' //个人中心模块路由
import navPage from './navPage' //首页四个nav模块路由
import assemble from './assemble' //拼团模块路由
import integral from './integral' //积分模块路由
import shop from './shop' //积分模块路由
import subscribe from './subscribe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home/index'
    },
    ...home,
    ...login,
    ...personal,
    ...navPage,
    ...assemble,
    ...integral,
    ...shop,
    ...subscribe
  ]
})
