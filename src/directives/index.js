import color from './color'
import tooltip from './tooltip'
import pulsate from './pulsate'
import slimscroll from './slimscroll'
import clickOutside from './click-outside'

const dirsctives = {
  color,
  tooltip,
  pulsate,
  slimscroll,
  clickOutside
}

dirsctives.install = (Vue) => {
  for (let name in dirsctives) {
    Vue.directive(name, dirsctives[name])
  }
}

export default dirsctives
