import color from './color'
import tooltip from './tooltip'
import popover from './popover'
import pulsate from './pulsate'
import clickOutside from './click-outside'

const dirsctives = {
  color,
  tooltip,
  popover,
  pulsate,
  clickOutside
}

dirsctives.install = (Vue) => {
  for (let name in dirsctives) {
    Vue.directive(name, dirsctives[name])
  }
}

export default dirsctives
