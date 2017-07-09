import $ from 'jquery'
import 'bootstrap'

var handleTooltip = function (el, binding) {
  $(el).tooltip('destroy')
  if (binding.value) {
    var options = {
      trigger: 'hover',
      container: 'body',
      placement: Object.keys(binding.modifiers)[0] || 'auto'
    }
    if (typeof binding.value === 'string') {
      options = Object.assign(options, {title: binding.value})
    } else if (typeof binding.value === 'object') {
      options = Object.assign(options, binding.value)
    }
    $(el).tooltip(options)
  }
}

export default {
  bind: handleTooltip,
  update: handleTooltip,
  unbind (el) {
    $(el).tooltip('destroy')
  }
}
