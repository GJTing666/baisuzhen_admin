import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login.vue'
import Forget from 'components/login/forget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      component: Forget
    }
  ]
})
