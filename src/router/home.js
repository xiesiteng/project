const home = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/home/home'),
    children: [
      {
        path: '/home/index',
        name: 'subscribe',
        component: () => import('@/components/home/index'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/home/subscribe',
        name: 'subscribe',
        component: () => import('@/components/home/subscribe'),
        meta: {
          title: '预约'
        }
      },
      {
        path: '/home/shop',
        name: 'shop',
        component: () => import('@/components/home/shop'),
        meta: {
          title: '商城'
        }
      },
      {
        path: '/home/mine',
        name: 'mine',
        component: () => import('@/components/home/mine'),
        meta: {
          title: '我的'
        }
      }
      ]
    }
  ]

export default home;
