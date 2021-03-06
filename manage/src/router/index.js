import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login.vue'
import Forget from 'components/login/forget.vue'
import Index from 'components/index'
import Step from 'components/login/step.vue'
import First from 'components/login/first.vue'
import Second from 'components/login/second.vue'
import Third from 'components/login/third.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      component: Forget
    },
    {
      path: '/step',
      name: 'order',
      component: Step
    }
  ]
})
