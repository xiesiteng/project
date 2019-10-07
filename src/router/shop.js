const shop = [
  {
    path: '/shop/shopCar',
    name: 'shopCar',
    component: () => import('@/components/shop/shopCar'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/shop/detail',
    name: 'detail',
    component: () => import('@/components/shop/detail'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/shop/submitOrder',
    name: 'submitOrder',
    component: () => import('@/components/shop/submitOrder'),
    meta: {
      title: '提交订单'
    }
  }

]

export default shop;
