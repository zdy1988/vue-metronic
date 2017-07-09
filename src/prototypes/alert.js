/**
 * Created by virus_zhh on 2017/7/10.
 */
import '../../node_modules/sweetalert2/dist/sweetalert2.min.css'

import swal from 'sweetalert2'

var alert = function (options) {
  swal(options, function (isConfirm) {
    if (isConfirm) {} else {}
  })
}

export default {
  default (title, message) {
    var options = {
      title: title,
      text: message,
      allowOutsideClick: true,
      confirmButtonClass: 'btn-success'
    }
    alert(options)
  },
  success (title, message) {
    var options = {
      title: title,
      text: message,
      type: 'success',
      allowOutsideClick: true,
      confirmButtonClass: 'btn-success'
    }
    alert(options)
  },
  warning (title, message) {
    var options = {
      title: title,
      text: message,
      type: 'warning',
      allowOutsideClick: true,
      confirmButtonClass: 'btn-warning'
    }
    alert(options)
  },
  error (title, message) {
    var options = {
      title: title,
      text: message,
      type: 'error',
      allowOutsideClick: true,
      confirmButtonClass: 'btn-danger'
    }
    alert(options)
  },
  info (title, message) {
    var options = {
      title: title,
      text: message,
      type: 'info',
      allowOutsideClick: true,
      confirmButtonClass: 'btn-info'
    }
    alert(options)
  }
}
