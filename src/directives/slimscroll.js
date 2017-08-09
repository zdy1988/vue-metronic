/**
 * Created by dell on 2017/8/8.
 */
import $ from 'jquery'
import 'jquery-slimscroll'

var handleSlimScroll = function (el, binding) {
  $(el).slimScroll({destroy: true})
  if (binding.value) {
    var options = {
      allowPageScroll: true,
      size: '7px',
      color: '#bbb',
      wrapperClass: 'slimScrollDiv',
      railColor: '#eaeaea',
      position: 'right',
      height: '100px',
      alwaysVisible: false,
      railVisible: true,
      disableFadeOut: true
    }
    if (typeof binding.value === 'number') {
      options = Object.assign(options, {height: binding.value + 'px'})
    } else if (typeof binding.value === 'object') {
      options = Object.assign(options, binding.value)
    }
    setTimeout(function () {
      $(el).slimScroll(options)
    }, 0)
  }
}

export default {
  bind: handleSlimScroll,
  update: handleSlimScroll,
  unbind (el) {
    $(el).slimScroll({destroy: true})
  }
}
