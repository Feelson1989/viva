import Vue from 'vue'
import Router from 'vue-router'


import VIHome from "./components/viva/Home.vue"
import VILogin from "./components/viva/Login.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:VIHome},
    {path:'/Login',component:VILogin}
  ]
})
