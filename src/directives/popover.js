/**
 * Created by virus_zhh on 2017/7/9.
 */
import $ from 'jquery'
import 'bootstrap'

var handlePopover = function (el, binding) {
  $(el).popover('destroy')
  if (binding.value) {
    var options = {
      trigger: 'hover',
      container: 'body',
      placement: Object.keys(binding.modifiers)[0] || 'auto'
    }
    if (typeof binding.value === 'string') {
      options = Object.assign(options, {content: binding.value})
    } else if (typeof binding.value === 'object') {
      options = Object.assign(options, binding.value)
    }
    $(el).popover(options)
  }
}

export default {
  bind: handlePopover,
  update: handlePopover,
  unbind (el) {
    $(el).popover('destroy')
  }
}
