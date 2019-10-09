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

/*export default new Router({
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
})*/
const router = new Router({
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

router.beforeEach((to, from, next) => {
  let path = to.path == '/home/index' || to.path == '/login/login' || to.path == '/login/forget' || to.path == '/home/subscribe' || to.path == '/home/shop' || to.path == '/home/mine' || to.path == '/rigster/rigster' || to.path == '/rigster/success' || to.path == '/login/success'
  if(path) {
    next();
  } else {

    let token = localStorage.getItem('token');
    if(token == null || token == '') {
      console.log(token)
      next('/login/login');
    }else {
      next();
    }
  }
});


export default router;
