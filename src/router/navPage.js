const navPage = [
  {
    path: '/navPage/faceManage',
    name: 'faceManage',
    component: () => import('@/components/navPage/faceManage'),
    meta: {
      title: '面部管理'
    }
  },
  {
    path: '/navPage/skinManage',
    name: 'skinManage',
    component: () => import('@/components/navPage/skinManage'),
    meta: {
      title: '焕肤管理'
    }
  },
  {
    path: '/navPage/event',
    name: 'event',
    component: () => import('@/components/navPage/event'),
    meta: {
      title: 'EVENT'
    }
  },
  {
    path: '/navPage/bodyCare',
    name: 'bodyCare',
    component: () => import('@/components/navPage/bodyCare'),
    meta: {
      title: 'BODY CARE'
    }
  }
]

export default navPage;
