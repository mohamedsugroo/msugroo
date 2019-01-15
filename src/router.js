import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/whoweare',
      name: 'whoweare',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/whoweare.vue')
    },
    {
      path: '/whatwedo',
      name: 'whatwedo',
      component: () => import('./views/whatwedo.vue')
    },
    {
      path: '/whatwedo/we-design',
      name: 'wedesign',
      component: () => import('./views/whatwedo/wedesign.vue')
    }
  ]
})
