const integral = [
  {
    path: '/integral/integral',
    name: 'integral',
    component: () => import('@/components/integral/integral'),
    meta: {
      title: '积分专区'
    }
  },
  {
    path: '/integral/detail',
    name: 'detail',
    component: () => import('@/components/integral/detail'),
    meta: {
      title: '积分兑换详情'
    }
  },
  {
    path: '/integral/integralPay',
    name: 'integralPay',
    component: () => import('@/components/integral/integralPay'),
    meta: {
      title: '积分兑换'
    }
  }

]

export default integral;
