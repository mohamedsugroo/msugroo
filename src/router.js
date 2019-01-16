import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import wedesign from './views/whatwedo/wedesign.vue'
import Whatwedo from './views/whatwedo.vue'
import Wedevelop from './views/whatwedo/wedevelop.vue'
import Wepromote from './views/whatwedo/wepromote.vue'

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
      component: Whatwedo
    },
    {
      path: '/whatwedo/we-design',
      name: 'wedesign',
      component: wedesign
    },
    {
      path: '/whatwedo/we-develop',
      name: 'wedesign',
      component: Wedevelop
    },
    {
      path: '/whatwedo/we-promote',
      name: 'wepromote',
      component: Wepromote
    }
  ]
})
