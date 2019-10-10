import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'vinyls',
      component: () => import('./views/Vinyls.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue')
    }
  ]
})
