import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config.json'
import {common} from '@/untils'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routers = []

function recursionRouters (routerConfig) {
  for (let item of routerConfig) {
    if (item.src) {
      item.meta = Object.assign({}, item)
      item.component = resolve => require(['@/docs/' + item.src], resolve)
      routers.push(item)
    } else if (item.children) {
      recursionRouters(item.children)
    }
  }
}

recursionRouters(routerConfig)

var router = new VueRouter({
  routes: [
    {path: '/', component: resolve => require(['@/docs/index'], resolve)},
    {path: '/login', component: resolve => require(['@/docs/index'], resolve)},
    {path: '/lock', component: resolve => require(['@/docs/lock'], resolve)},
    {
      path: '/main',
      component: resolve => require(['@/docs/main'], resolve),
      children: routers
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
  common.scrollTop()
})

export default router

export {
  routerConfig,
  routers
}
