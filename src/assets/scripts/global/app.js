/**
Core script to handle the entire theme and core functions
**/
import $ from 'jquery'

// IE mode
var isRTL = false
var isIE8 = false
var isIE9 = false
var isIE10 = false

var resizeHandlers = []

var assetsPath = '../assets/'

var globalImgPath = 'global/img/'

var globalPluginsPath = 'global/plugins/'

var globalCssPath = 'global/css/'

// initializes main settings
var handleInit = function () {
  if ($('body').css('direction') === 'rtl') {
    isRTL = true
  }

  isIE8 = !!navigator.userAgent.match(/MSIE 8.0/)
  isIE9 = !!navigator.userAgent.match(/MSIE 9.0/)
  isIE10 = !!navigator.userAgent.match(/MSIE 10.0/)

  if (isIE10) {
    $('html').addClass('ie10') // detect IE10 version
  }

  if (isIE10 || isIE9 || isIE8) {
    $('html').addClass('ie') // detect IE10 version
  }
}

// runs callback functions set by App.addResponsiveHandler().
var _runResizeHandlers = function () {
  // reinitialize other subscribed elements
  for (var i = 0; i < resizeHandlers.length; i++) {
    var each = resizeHandlers[i]
    each.call()
  }
}

var handleOnResize = function () {
  var windowWidth = $(window).width()
  var resize
  if (isIE8) {
    var currheight
    $(window).resize(function () {
      if (currheight === document.documentElement.clientHeight) {
        return // quite event since only body resized not window.
      }
      if (resize) {
        clearTimeout(resize)
      }
      resize = setTimeout(function () {
        _runResizeHandlers()
      }, 50) // wait 50ms until window resize finishes.
      currheight = document.documentElement.clientHeight // store last body client height
    })
  } else {
    $(window).resize(function () {
      if ($(window).width() !== windowWidth) {
        windowWidth = $(window).width()
        if (resize) {
          clearTimeout(resize)
        }
        resize = setTimeout(function () {
          _runResizeHandlers()
        }, 50) // wait 50ms until window resize finishes.
      }
    })
  }
}

// handle group element heights
var handleHeight = function () {
  $('[data-auto-height]').each(function () {
    var parent = $(this)
    var items = $('[data-height]', parent)
    var height = 0
    var mode = parent.attr('data-mode')
    var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0)

    items.each(function () {
      if ($(this).attr('data-height') === 'height') {
        $(this).css('height', '')
      } else {
        $(this).css('min-height', '')
      }

      var height_ = (mode === 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true))
      if (height_ > height) {
        height = height_
      }
    })

    height = height + offset

    items.each(function () {
      if ($(this).attr('data-height') === 'height') {
        $(this).css('height', height)
      } else {
        $(this).css('min-height', height)
      }
    })

    if (parent.attr('data-related')) {
      $(parent.attr('data-related')).css('height', parent.height())
    }
  })
}

let App = new class {
  // main function to initiate the theme
  init () {
    // IMPORTANT!!!: Do not modify the core handlers call order.

    // Core handlers
    handleInit() // initialize core variables
    handleOnResize() // set and handle responsive

    // Handle group element heights
    App.addResizeHandler(handleHeight) // handle auto calculating height on window resize
  }

  // public function to add callback a function which will be called on window resize
  addResizeHandler (func) {
    resizeHandlers.push(func)
  }

  // public functon to call _runresizeHandlers
  runResizeHandlers () {
    _runResizeHandlers()
  }

  // wrApper function to scroll(focus) to an element
  scrollTo (el, offeset) {
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

  // function to scroll to the top
  scrollTop () {
    App.scrollTo()
  }

  // public function to get a paremeter by name from URL
  getURLParameter (paramName) {
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

  // check for device touch support
  isTouchDevice () {
    try {
      document.createEvent('TouchEvent')
      return true
    } catch (e) {
      return false
    }
  }

  // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
  getViewPort () {
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

  getUniqueID (prefix) {
    return prefix + '_' + Math.floor(Math.random() * (new Date()).getTime())
  }

  // check IE8 mode
  isIE8 () {
    return isIE8
  }

  // check IE9 mode
  isIE9 () {
    return isIE9
  }

  // check RTL mode
  isRTL () {
    return isRTL
  }

  getAssetsPath () {
    return assetsPath
  }

  setAssetsPath (path) {
    assetsPath = path
  }

  setGlobalImgPath (path) {
    globalImgPath = path
  }

  getGlobalImgPath () {
    return assetsPath + globalImgPath
  }

  setGlobalPluginsPath (path) {
    globalPluginsPath = path
  }

  getGlobalPluginsPath () {
    return assetsPath + globalPluginsPath
  }

  getGlobalCssPath () {
    return assetsPath + globalCssPath
  }

  getResponsiveBreakpoint (size) {
    // bootstrap responsive breakpoints
    var sizes = {
      'xs': 480,     // extra small
      'sm': 768,     // small
      'md': 992,     // medium
      'lg': 1200     // large
    }

    return sizes[size] ? sizes[size] : 0
  }

  getDateDiff (dateStr) {
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
}()

export default App
