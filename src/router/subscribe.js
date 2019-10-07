const subscribe = [
  {
    path: '/subscribe/subscribe',
    name: 'subscribe',
    component: () => import('@/components/subscribe/subscribe'),
    meta: {
      title: '我的预约'
    }
  },
  {
    path: '/subscribe/completed',
    name: 'completed',
    component: () => import('@/components/subscribe/completed'),
    meta: {
      title: '预约详情'
    }
  },
  {
    path: '/subscribe/underway',
    name: 'underway',
    component: () => import('@/components/subscribe/underway'),
    meta: {
      title: '预约详情'
    }
  },
  {
    path: '/subscribe/productDetail',
    name: 'productDetail',
    component: () => import('@/components/subscribe/productDetail'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/subscribe/detail',
    name: 'detail',
    component: () => import('@/components/subscribe/detail'),
    meta: {
      title: '预约详情'
    }
  }

]

export default subscribe;
