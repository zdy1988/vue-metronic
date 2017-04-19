import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: resolve => require(['@/components/Hello'], resolve)},
    {path: '/hello2', component: resolve => require(['@/components/Hello2'], resolve)},
    {path: '/views', component: resolve => require(['@/views/index'], resolve)},
    {
      path: '/layout',
      component: resolve => require(['@/views/layout'], resolve),
      children: [
        {path: '/', component: resolve => require(['@/views/dashboard'], resolve)},
        {path: 'ui_icons', component: resolve => require(['@/views/ui_icons'], resolve)}
      ]
    }
  ]
})
