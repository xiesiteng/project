const personal = [
  {
    path: '/person/personal',
    name: 'personal',
    component: () => import('@/components/person/personal'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/person/changeName',
    name: 'changeName',
    component: () => import('@/components/person/changeName'),
    meta: {
      title: '昵称'
    }
  },
  {
    path: '/person/mineAddress',
    name: 'mineAddress',
    component: () => import('@/components/person/mineAddress'),
    meta: {
      title: '我的地址'
    }
  },
  {
    path: '/person/newAddress',
    name: 'newAddress',
    component: () => import('@/components/person/newAddress'),
    meta: {
      title: '新增地址'
    }
  },
  {
    path: '/person/discount',
    name: 'discount',
    component: () => import('@/components/person/discount'),
    meta: {
      title: '优惠券'
    }
  },
  {
    path: '/person/integral',
    name: 'integral',
    component: () => import('@/components/person/integral'),
    meta: {
      title: '积分'
    }
  },
  {
    path: '/person/collection',
    name: 'collection',
    component: () => import('@/components/person/collection'),
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/person/myOrder',
    name: 'myOrder',
    component: () => import('@/components/person/myOrder'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/person/orderDetail',
    name: 'orderDetail',
    component: () => import('@/components/person/orderDetail'),
    meta: {
      title: '订单详情'
    }
  }
]

export default personal;
