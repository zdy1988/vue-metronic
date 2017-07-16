import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: resolve => require(['@/views/index'], resolve)},
    {
      path: '/main',
      component: resolve => require(['@/views/main'], resolve),
      children: [
        {path: '/', component: resolve => require(['@/views/dashboard'], resolve)},
        {path: 'ui_colors', component: resolve => require(['@/views/ui_colors'], resolve)},
        {path: 'ui_portlets', component: resolve => require(['@/views/ui_portlets'], resolve)},
        {path: 'ui_modals', component: resolve => require(['@/views/ui_modals'], resolve)},
        {path: 'ui_icons', component: resolve => require(['@/views/ui_icons'], resolve)},
        {path: 'ui_buttons', component: resolve => require(['@/views/ui_buttons'], resolve)},
        {path: 'ui_tabs', component: resolve => require(['@/views/ui_tabs'], resolve)},
        {path: 'ui_tooltips', component: resolve => require(['@/views/ui_tooltips'], resolve)},
        {path: 'ui_inputs', component: resolve => require(['@/views/ui_inputs'], resolve)},
        {path: 'ui_general', component: resolve => require(['@/views/ui_general'], resolve)},
        {path: 'ui_alerts', component: resolve => require(['@/views/ui_alerts'], resolve)},
        {path: 'ui_datepickers', component: resolve => require(['@/views/ui_datepickers'], resolve)}
      ]
    }
  ]
})
