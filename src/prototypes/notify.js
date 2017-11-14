import 'toastr/build/toastr.css'

import toastr from 'toastr'

var getOptions = function () {
  return {
    title: typeof arguments[0] === 'string' && typeof arguments[1] === 'string' ? arguments[0] : undefined,
    text: typeof arguments[0] === 'string' && typeof arguments[1] === 'string' ? arguments[1] : arguments[0],
    onclick: typeof arguments[1] === 'function' ? arguments[1] : arguments[2],
    closeButton: true,
    debug: false,
    positionClass: 'toast-top-right',
    showDuration: 1000,
    hideDuration: 1000,
    timeOut: 5000,
    extendedTimeOut: 1000,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  }
}

var notify = (options) => {
  toastr.options = options
  toastr[options.state](options.text, options.title)
}

export function $notify () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    state: 'info'
  })
  notify(options)
}

export function $successNotify () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    state: 'success'
  })
  notify(options)
}

export function $warningNotify () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    state: 'warning'
  })
  notify(options)
}

export function $infoNotify () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    state: 'info'
  })
  notify(options)
}

export function $dangerNotify () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    state: 'error'
  })
  notify(options)
}
