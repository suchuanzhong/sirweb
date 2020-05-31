'use strict'
import Vue from 'vue'
import Router from 'vue-router'
// import Oldservice from '@/views/Service'
import Service from '@/views/Newservice'
const Home = () => import('@/views/Home')
const About = () => import('@/views/About')
const Plus = () => import('@/views/Plus')
const Trends = () => import('@/views/Trends')
const Reseach = () => import('@/views/Reseach')
const Project = () => import('@/views/Project')
const Projectinfo = () => import('@/views/Projectinfo')
const Reseachinfo = () => import('@/views/Reseachinfo')
const Trendsinfo = () => import('@/views/Trendsinfo')
const Joinus = () => import('@/views/Joinus')
const Culture = () => import('@/views/Culture')
const Adver = () => import('@/views/Adver')
const Adverinfo = () => import('@/views/Adverinfo')
// const Brandlist = () => import('@/views/Brandmerchants')
// const Advisor = () => import('@/views/Advisor')
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/plus',
      name: 'SIRPlus',
      component: Plus,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/trends',
      name: 'Trends',
      component: Trends,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/reseach',
      name: 'Reseach',
      component: Reseach,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/culture',
      name: 'Culture',
      component: Culture,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/adver',
      name: 'Adver',
      component: Adver,
      meta: {
        keepAlive: true // 不需要缓存
      }
    },
    {
      path: '/adverinfo',
      name: 'Adverinfo',
      component: Adverinfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/joinus',
      name: 'Joinus',
      component: Joinus,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/projectinfo/:id',
      name: 'Projectinfo',
      component: Projectinfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/reseachinfo/:id',
      name: 'Reseachinfo',
      component: Reseachinfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/trendsinfo/:id',
      name: 'Trendsinfo',
      component: Trendsinfo,
      meta: {
        keepAlive: false // 不需要缓存
      }
    }
    // {
    //   path: '/servicebrand',
    //   name: 'Brandlist',
    //   component: Brandlist,
    //   meta: {
    //     keepAlive: false // 不需要缓存
    //   }
    // }
    // {
    //   path: '/serviceadvsior',
    //   name: 'Advisor',
    //   component: Advisor,
    //   meta: {
    //     keepAlive: false // 不需要缓存
    //   }
    // }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
