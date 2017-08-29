import Animated from './animated-vue'
import PACKAGE_COMPONENT_PREFIX from './animated-vue/common/config'
import FadeInBounceOut from './fade-in-bounce-out'

const components = {
  'fade-in-bounce-out': FadeInBounceOut
}

components.install = (Vue) => {
  Animated.install(Vue)

  for (let name in components) {
    Vue.component(PACKAGE_COMPONENT_PREFIX + name, components[name])
  }
}

export default components
