const login = [
  {
    path: '/login/login',
    name: 'login',
    component: () => import('@/components/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/login/forget',
    name: 'forget',
    component: () => import('@/components/login/forget'),
    meta: {
      title: '找回密码'
    }
  },
  {
    path: '/rigster/rigster',
    name: 'rigster',
    component: () => import('@/components/rigster/rigster'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/rigster/success',
    name: 'success',
    component: () => import('@/components/rigster/success'),
    meta: {
      title: '注册成功'
    }
  },
  {
    path: '/login/success',
    name: 'success',
    component: () => import('@/components/login/success'),
    meta: {
      title: '修改密码成功'
    }
  }
]

export default login;
