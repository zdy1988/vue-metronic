import 'bootstrap-sweetalert/dist/sweetalert.css'

import swal from 'bootstrap-sweetalert'

var getOptions = function () {
  return {
    title: arguments[0],
    text: typeof arguments[1] === 'string' ? arguments[1] : '',
    agree: typeof arguments[1] === 'function' ? arguments[1] : arguments[2],
    disagree: typeof arguments[3] === 'function' ? arguments[3] : arguments[2]
  }
}

var alert = function (options) {
  swal(options, function (isConfirm) {
    if (isConfirm) {
      if (options.agree && typeof options.agree === 'function') {
        options.agree()
      }
    } else {
      if (options.disagree && typeof options.disagree === 'function') {
        options.disagree()
      }
    }
  })
}

export function $alert () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    allowOutsideClick: true,
    confirmButtonClass: 'btn-default'
  })
  alert(options)
}

export function $successAlert () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    allowOutsideClick: true,
    type: 'success',
    confirmButtonClass: 'btn-success'
  })
  alert(options)
}

export function $dangerAlert () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    allowOutsideClick: true,
    type: 'error',
    confirmButtonClass: 'btn-danger'
  })
  alert(options)
}

export function $warningAlert () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    allowOutsideClick: true,
    type: 'warning',
    confirmButtonClass: 'btn-warning'
  })
  alert(options)
}

export function $infoAlert () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    allowOutsideClick: true,
    type: 'info',
    confirmButtonClass: 'btn-info'
  })
  alert(options)
}

export function $confirm () {
  var options = getOptions.apply(this, arguments)
  options = Object.assign(options, {
    $alert: $alert,
    $successAlert: $successAlert,
    $dangerAlert: $dangerAlert,
    $warningAlert: $warningAlert,
    $infoAlert: $infoAlert,
    allowOutsideClick: true,
    showConfirmButton: true,
    showCancelButton: true,
    closeOnConfirm: !(options.agree && typeof options.agree === 'function'),
    closeOnCancel: !(options.disagree && typeof options.disagree === 'function'),
    confirmButtonClass: 'btn-info',
    cancelButtonClass: 'btn-danger',
    type: 'warning',
    confirmButtonText: 'Yes, I agree',
    cancelButtonText: 'No, I disagree'
  })
  alert(options)
}
