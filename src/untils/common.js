import $ from 'jquery'

export const isIE8 = () => {
  return !!navigator.userAgent.match(/MSIE 8.0/)
}

export const isIE9 = () => {
  return !!navigator.userAgent.match(/MSIE 9.0/)
}

export const isIE10 = () => {
  return !!navigator.userAgent.match(/MSIE 10.0/)
}

export const isTouchDevice = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (e) {
    return false
  }
}

export const getURLParameter = (paramName) => {
  var searchString = window.location.search.substring(1)
  var i
  var val
  var params = searchString.split('&')

  for (i = 0; i < params.length; i++) {
    val = params[i].split('=')
    if (val[0] === paramName) {
      return unescape(val[1])
    }
  }
  return null
}

export const getViewPort = () => {
  var e = window
  var a = 'inner'
  if (!('innerWidth' in window)) {
    a = 'client'
    e = document.documentElement || document.body
  }

  return {
    width: e[a + 'Width'],
    height: e[a + 'Height']
  }
}

export const getResponsiveBreakpoint = (size) => {
  // bootstrap responsive breakpoints
  var sizes = {
    'xs': 480,     // extra small
    'sm': 768,     // small
    'md': 992,     // medium
    'lg': 1200     // large
  }

  return sizes[size] ? sizes[size] : 0
}

export const getUniqueID = (prefix) => {
  return prefix + '_' + Math.floor(Math.random() * (new Date()).getTime())
}

export const scrollTo = (el, offeset) => {
  el = $(el)
  var pos = (el && el.size() > 0) ? el.offset().top : 0

  if (el) {
    if ($('body').hasClass('page-header-fixed')) {
      pos = pos - $('.page-header').height()
    } else if ($('body').hasClass('page-header-top-fixed')) {
      pos = pos - $('.page-header-top').height()
    } else if ($('body').hasClass('page-header-menu-fixed')) {
      pos = pos - $('.page-header-menu').height()
    }
    pos = pos + (offeset !== undefined ? offeset : -1 * el.height())
  }

  $('html,body').animate({
    scrollTop: pos
  }, 'slow')
}

export const scrollTop = () => scrollTo()

export const getDateDiff = (dateStr) => {
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var now = new Date().getTime()
  var diffValue = now - Date.parse(dateStr.replace(/-/gi, '/'))
  if (diffValue < 0) {
    return
  }
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  var result = ''
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

