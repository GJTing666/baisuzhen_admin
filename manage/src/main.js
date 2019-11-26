// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/css/element-variables.scss'
import 'iconfont/iconfont.css'
import 'css/public.less'
import {request, get, post} from 'js/axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 将封装的axios写入vue原型里
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
