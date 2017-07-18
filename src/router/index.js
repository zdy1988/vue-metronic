import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config.json'
import scroll from '@/mixins/_scroll.js'

Vue.use(VueRouter)

const routers = Object.keys(routerConfig).map(key => {
  let item = routerConfig[key]
  if (item.src) {
    item.component = resolve => require(['@/views/' + item.src], resolve)
    return item
  }
}).filter(item => item !== undefined)

var router = new VueRouter({
  routes: [
    {path: '/', component: resolve => require(['@/views/index'], resolve)},
    {
      path: '/main',
      component: resolve => require(['@/views/main'], resolve),
      children: routers
    }
  ]
})

router.beforeEach((to, from, next) => {
  scroll.methods.goto()
  next()
})

export default router

export {
  routerConfig
}
