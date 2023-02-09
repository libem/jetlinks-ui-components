
export default [
  
  {
    path: 'AIcon',
    meta: {"category":"Components","subtitle":"图标","cols":1,"type":"导航","title":"Icon"},
    component: () => import('../../../components/AIcon/demo/index.vue'),
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  },
  {
    path: 'Scrollbar',
    meta: {"category":"Components","subtitle":"滚动条","cols":1,"type":"导航","title":"Scrollbar","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Scrollbar.svg"},
    component: () => import('../../../components/Scrollbar/demo/index.vue'),
  }
];