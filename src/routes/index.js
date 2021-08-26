const routes = [
  { path: '/', component: () => import('../views/index.vue') },
  { path: '/table', component: () => import('../views/table.vue') },
  { path: '/currency', component: () => import('../views/currency.vue') },
  { path: '/emitter', component: () => import('../views/emiter.vue') },
];
export default routes;
