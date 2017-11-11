import Animates from './animates'
import Dirsctives from './directives'
import Prototypes from './prototypes'
import Components from './components'

var Metronic = {
  install (Vue) {
    Animates.install(Vue)
    Dirsctives.install(Vue)
    Prototypes.install(Vue)
    Components.install(Vue)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Metronic)
}

export default Metronic
