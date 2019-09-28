const assemble = [
  {
    path: '/assemble/assemble',
    name: 'assemble',
    component: () => import('@/components/assemble/assemble'),
    meta: {
      title: '缦缦拼团'
    }
  },
  {
    path: '/assemble/detail',
    name: 'detail',
    component: () => import('@/components/assemble/detail'),
    meta: {
      title: '拼团详情'
    }
  },
  {
    path: '/assemble/assemblePay',
    name: 'assemblePay',
    component: () => import('@/components/assemble/assemblePay'),
    meta: {
      title: '拼团详情'
    }
  },
  {
    path: '/assemble/paySuccess',
    name: 'paySuccess',
    component: () => import('@/components/assemble/paySuccess'),
    meta: {
      title: '拼团成功'
    }
  }

]

export default assemble;
