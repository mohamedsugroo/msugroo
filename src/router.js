import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Letstalk from './views/letstalk.vue'
import wedesign from './views/whatwedo/wedesign.vue'
import Whatwedo from './views/whatwedo.vue'
import Wedevelop from './views/whatwedo/wedevelop.vue'
import Wepromote from './views/whatwedo/wepromote.vue'
import wesupport from './views/whatwedo/wesupport.vue'
import Ourwork from  './views/ourwork.vue'
import privacypolicy from  './views/legal/privacypolicy.vue'
import seo from  './views/whatwedo/seo.vue'


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
      path: '/lets-talk',
      name: 'letstalk',
      component: Letstalk
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
      path: '/ourwork',
      name: 'ourwork',
      component: Ourwork
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
      name: 'weddevelop',
      component: Wedevelop
    },
    {
      path: '/whatwedo/we-promote',
      name: 'wepromote',
      component: Wepromote
    },
    {
      path: '/whatwedo/we-support',
      name: 'wesupport',
      component: wesupport
    },
    {
      path: '/whatwedo/we-promote/seo',
      name: 'seo',
      component: seo
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: privacypolicy
    }
  ]
})
