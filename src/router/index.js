import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: function (resolve) {
        require(['@/components/Hello'], resolve)
      }
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: function (resolve) {
        require(['@/components/Hello2'], resolve)
      }
    }
  ]
})
