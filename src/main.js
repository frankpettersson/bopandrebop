import Vue from 'vue'
import bopandrebop from './bopandrebop.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(bopandrebop)
}).$mount('#bopandrebop')
