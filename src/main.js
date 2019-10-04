import Vue from 'vue'
import bopandrebop from './bopandrebop.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(bopandrebop)
}).$mount('#bopandrebop')
