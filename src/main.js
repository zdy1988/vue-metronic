// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import Animated from './animates/animated-vue'
import Dirsctives from './directives'
import Prototypes from './prototypes'
import Components from './components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(Animated)
Vue.use(Dirsctives)
Vue.use(Prototypes)
Vue.use(Components)
