import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import stepModule from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      login,
      step: stepModule
  }
})
