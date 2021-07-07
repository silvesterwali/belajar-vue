const routes = [
  { path: "/", component: () => import("../views/index.vue") },
  { path: "/table", component: () => import("../views/table.vue") },
];
export default routes;
