const login = [
  {
    path: '/login/login',
    name: 'login',
    component: () => import('@/components/login/login')
  },
  {
    path: '/rigster/rigster',
    name: 'rigster',
    component: () => import('@/components/rigster/rigster')
  }
]

export default login;
