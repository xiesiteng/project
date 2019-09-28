const login = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/login')
  },
  {
    path: '/rigster',
    name: 'rigster',
    component: () => import('@/components/rigster/rigster')
  }
]

export default login;
