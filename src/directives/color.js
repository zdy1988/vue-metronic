import {colors, colorKeys} from '@/untils'

var handleColor = function (el, binding) {
  if (colorKeys.indexOf(binding.value) > -1) {
    el.style.backgroundColor = colors[binding.value].base
    el.style.color = colors[binding.value].font
  }
}

export default {
  bind: handleColor,
  update: handleColor,
  unbind (el, binding) {
    el.style.backgroundColor = ''
    el.style.color = ''
  }
}
