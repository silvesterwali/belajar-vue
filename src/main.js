import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
import VueRouter from "vue-router"
import routes from '../src/routes'
Vue.use(VueRouter)

const router=new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
