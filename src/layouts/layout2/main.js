/**
 * Created by virus_zhh on 2017/11/12.
 */
import $ from 'jquery'
import Cookies from 'js-cookie'
import {common} from '@/untils'

const resBreakpointMd = common.getResponsiveBreakpoint('md')

let resizeHandlers = []

const addResizeHandler = function (func) {
  resizeHandlers.push(func)
}

const runResizeHandlers = function () {
  // reinitialize other subscribed elements
  for (var i = 0; i < resizeHandlers.length; i++) {
    var each = resizeHandlers[i]
    each.call()
  }
}

var handleOnResize = function () {
  var windowWidth = $(window).width()
  var resize
  if (common.isIE8()) {
    var currheight
    $(window).resize(function () {
      if (currheight === document.documentElement.clientHeight) {
        return // quite event since only body resized not window.
      }
      if (resize) {
        clearTimeout(resize)
      }
      resize = setTimeout(function () {
        runResizeHandlers()
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
          runResizeHandlers()
        }, 50) // wait 50ms until window resize finishes.
      }
    })
  }
}

// Set proper height for sidebar and content. The content and sidebar height must be synced always.
const handleSidebarAndContentHeight = function () {
  var content = $('.page-content')
  var sidebar = $('.page-sidebar')
  var body = $('body')
  var height
  if (body.hasClass('page-footer-fixed') === true && body.hasClass('page-sidebar-fixed') === false) {
    var availableHeight = common.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight()
    if (content.height() < availableHeight) {
      content.css('min-height', availableHeight)
    }
  } else {
    if (body.hasClass('page-sidebar-fixed')) {
      height = _calculateFixedSidebarViewportHeight()
      if (body.hasClass('page-footer-fixed') === false) {
        height = height - $('.page-footer').outerHeight()
      }
    } else {
      var headerHeight = $('.page-header').outerHeight()
      var footerHeight = $('.page-footer').outerHeight()
      if (common.getViewPort().width < resBreakpointMd) {
        height = common.getViewPort().height - headerHeight - footerHeight
      } else {
        height = sidebar.height() + 20
      }
      if ((height + headerHeight + footerHeight) <= common.getViewPort().height) {
        height = common.getViewPort().height - headerHeight - footerHeight
      }
    }
    content.css('min-height', height)
  }
}

// Handle sidebar menu links
const handleSidebarMenuActiveLink = function (mode, el, $state) {
  var url = location.hash.toLowerCase()
  var menu = $('.page-sidebar-menu')
  if (mode === 'click' || mode === 'set') {
    el = $(el)
  } else if (mode === 'match') {
    menu.find('li > a').each(function () {
      var state = $(this).attr('ui-sref')
      if ($state && state) {
        if ($state.is(state)) {
          el = $(this)
          return
        }
      } else {
        var path = $(this).attr('href')
        if (path) {
          // url match condition
          path = path.toLowerCase()
          if (path.length > 1 && url.substr(1, path.length - 1) === path.substr(1)) {
            el = $(this)
            return
          }
        }
      }
    })
  }
  if (!el || el.size() === 0) {
    return
  }
  if (el.attr('href') === 'javascript:' ||
    el.attr('ui-sref') === 'javascript:' ||
    el.attr('href') === '#' ||
    el.attr('ui-sref') === '#'
  ) {
    return
  }
  // begin: handle active state
  if (menu.hasClass('page-sidebar-menu-hover-submenu') === false) {
    menu.find('li.nav-item.open').each(function () {
      var match = false
      $(this).find('li').each(function () {
        var state = $(this).attr('ui-sref')
        if ($state && state) {
          if ($state.is(state)) {
            match = true
            return
          }
        } else if ($(this).find(' > a').attr('href') === el.attr('href')) {
          match = true
          return
        }
      })
      if (match === true) {
        return
      }
      $(this).removeClass('open')
      $(this).find('> a > .arrow.open').removeClass('open')
      $(this).find('> .sub-menu').slideUp()
    })
  } else {
    menu.find('li.open').removeClass('open')
  }
  menu.find('li.active').removeClass('active')
  menu.find('li > a > .selected').remove()
  // end: handle active state
  el.parents('li').each(function () {
    $(this).addClass('active')
    $(this).find('> a > span.arrow').addClass('open')
    if ($(this).parent('ul.page-sidebar-menu').size() === 1) {
      $(this).find('> a').append('<span class="selected"></span>')
    }
    if ($(this).children('ul.sub-menu').size() === 1) {
      $(this).addClass('open')
    }
  })
  if (mode === 'click') {
    if (common.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { // close the menu on mobile view while laoding a page
      $('.page-header .responsive-toggler').click()
    }
  }
}

// Handle sidebar menu
const handleSidebarMenu = function () {
  // handle sidebar link click
  $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
    var that = $(this).closest('.nav-item').children('.nav-link')
    if (common.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr('data-initialized') && $('body').hasClass('page-sidebar-closed') && that.parent('li').parent('.page-sidebar-menu').size() === 1) {
      return
    }
    var hasSubMenu = that.next().hasClass('sub-menu')
    if (common.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) { // exit of hover sidebar menu
      return
    }
    if (hasSubMenu === false) {
      if (common.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { // close the menu on mobile view while laoding a page
        $('.page-header .responsive-toggler').click()
      }
      return
    }
    var parent = that.parent().parent()
    var the = that
    var menu = $('.page-sidebar-menu')
    var sub = that.next()
    var autoScroll = menu.data('auto-scroll')
    var slideSpeed = parseInt(menu.data('slide-speed'))
    var keepExpand = menu.data('keep-expanded')
    if (keepExpand !== true) {
      parent.children('li.open').children('a').children('.arrow').removeClass('open')
      parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed)
      parent.children('li.open').removeClass('open')
    }
    var slideOffeset = -200
    if (sub.is(':visible')) {
      $('.arrow', the).removeClass('open')
      the.parent().removeClass('open')
      sub.slideUp(slideSpeed, function () {
        if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
          common.scrollTo(the, slideOffeset)
        }
        handleSidebarAndContentHeight()
      })
    } else if (hasSubMenu) {
      $('.arrow', the).addClass('open')
      the.parent().addClass('open')
      sub.slideDown(slideSpeed, function () {
        if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
          common.scrollTo(the, slideOffeset)
        }
        handleSidebarAndContentHeight()
      })
    }
    e.preventDefault()
  })
  // handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
  $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function () {
    common.scrollTop()
  })
  // handle sidebar hover effect
  handleFixedSidebarHoverEffect()
  // handle the search bar close
  $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
    e.preventDefault()
    $('.sidebar-search').removeClass('open')
  })
  // handle the search query submit on enter press
  $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
    if (e.which === 13) {
      $('.sidebar-search').submit()
      return false // <---- Add this line
    }
  })
  // handle the search submit(for sidebar search and responsive mode of the header search)
  $('.sidebar-search .submit').on('click', function (e) {
    e.preventDefault()
    if ($('body').hasClass('page-sidebar-closed')) {
      if ($('.sidebar-search').hasClass('open') === false) {
        if ($('.page-sidebar-fixed').size() === 1) {
          $('.page-sidebar .sidebar-toggler').click() // trigger sidebar toggle button
        }
        $('.sidebar-search').addClass('open')
      } else {
        $('.sidebar-search').submit()
      }
    } else {
      $('.sidebar-search').submit()
    }
  })
  // handle close on body click
  if ($('.sidebar-search').size() !== 0) {
    $('.sidebar-search .input-group').on('click', function (e) {
      e.stopPropagation()
    })
    $('body').on('click', function () {
      if ($('.sidebar-search').hasClass('open')) {
        $('.sidebar-search').removeClass('open')
      }
    })
  }
}

// Handles the horizontal menu
const handleHeader = function () {
  // handle search box expand/collapse
  $('.page-header').on('click', '.search-form', function (e) {
    $(this).addClass('open')
    $(this).find('.form-control').focus()
    $('.page-header .search-form .form-control').on('blur', function (e) {
      $(this).closest('.search-form').removeClass('open')
      $(this).unbind('blur')
    })
  })
  // handle hor menu search form on enter press
  $('.page-header').on('keypress', '.hor-menu .search-form .form-control', function (e) {
    if (e.which === 13) {
      $(this).closest('.search-form').submit()
      return false
    }
  })
  // handle header search button click
  $('.page-header').on('mousedown', '.search-form.open .submit', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $(this).closest('.search-form').submit()
  })
}

// Helper function to calculate sidebar height for fixed sidebar layout.
const _calculateFixedSidebarViewportHeight = function () {
  var sidebarHeight = common.getViewPort().height - $('.page-header').outerHeight()
  if ($('body').hasClass('page-footer-fixed')) {
    sidebarHeight = sidebarHeight - $('.page-footer').outerHeight()
  }
  return sidebarHeight
}

// Handles fixed sidebar
const handleFixedSidebar = function () {
  var menu = $('.page-sidebar-menu')
  if ($('.page-sidebar-fixed').size() === 0) {
    handleSidebarAndContentHeight()
    return
  }
  if (common.getViewPort().width >= resBreakpointMd) {
    menu.attr('data-height', _calculateFixedSidebarViewportHeight())
    handleSidebarAndContentHeight()
  }
}

// Handles sidebar toggler to close/hide the sidebar.
const handleFixedSidebarHoverEffect = function () {
  var body = $('body')
  if (body.hasClass('page-sidebar-fixed')) {
    $('.page-sidebar').on('mouseenter', function () {
      if (body.hasClass('page-sidebar-closed')) {
        $(this).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed')
      }
    }).on('mouseleave', function () {
      if (body.hasClass('page-sidebar-closed')) {
        $(this).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed')
      }
    })
  }
}

// Hanles sidebar toggler
const handleSidebarToggler = function () {
  var body = $('body')
  /**
   if (Cookies && Cookies.get('sidebar_closed') === '1' && common.getViewPort().width >= resBreakpointMd) {
            $('body').addClass('page-sidebar-closed')
            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed')
        }
   */
  // handle sidebar show/hide
  $('body').on('click', '.sidebar-toggler', function (e) {
    var sidebar = $('.page-sidebar')
    var sidebarMenu = $('.page-sidebar-menu')
    $('.sidebar-search', sidebar).removeClass('open')
    if (body.hasClass('page-sidebar-closed')) {
      body.removeClass('page-sidebar-closed')
      sidebarMenu.removeClass('page-sidebar-menu-closed')
      if (Cookies) {
        Cookies.set('sidebar_closed', '0')
      }
    } else {
      body.addClass('page-sidebar-closed')
      sidebarMenu.addClass('page-sidebar-menu-closed')
      if (body.hasClass('page-sidebar-fixed')) {
        sidebarMenu.trigger('mouseleave')
      }
      if (Cookies) {
        Cookies.set('sidebar_closed', '1')
      }
    }
    $(window).trigger('resize')
  })
  $('body').on('click', '.responsive-toggler', function (e) {
    var sidebar = $('.page-sidebar')
    if (sidebar.hasClass('in')) {
      sidebar.slideUp('fast', function () {
        sidebar.removeClass('in')
      })
    } else {
      sidebar.slideDown('fast', function () {
        sidebar.addClass('in')
      })
    }
  })
}

// Handles Bootstrap Tabs.
const handleTabs = function () {
  // fix content height on tab click
  $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
    handleSidebarAndContentHeight()
  })
}

// Handles the go to top button at the footer
const handleGoTop = function () {
  var offset = 300
  var duration = 500
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
    $(window).bind('touchend touchcancel touchleave', function (e) {
      if ($(this).scrollTop() > offset) {
        $('.scroll-to-top').fadeIn(duration)
      } else {
        $('.scroll-to-top').fadeOut(duration)
      }
    })
  } else {  // general
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.scroll-to-top').fadeIn(duration)
      } else {
        $('.scroll-to-top').fadeOut(duration)
      }
    })
  }
  $('.scroll-to-top').click(function (e) {
    e.preventDefault()
    $('html, body').animate({scrollTop: 0}, duration)
    return false
  })
}

// Hanlde 100% height elements(block, portlet, etc)
const handle100HeightContent = function () {
  $('.full-height-content').each(function () {
    var target = $(this)
    var height = common.getViewPort().height -
      $('.page-header').outerHeight(true) -
      $('.page-footer').outerHeight(true) -
      $('.page-title').outerHeight(true) -
      $('.page-bar').outerHeight(true)
    if (target.hasClass('portlet')) {
      var portletBody = target.find('.portlet-body')
      height = height -
        target.find('.portlet-title').outerHeight(true) -
        parseInt(target.find('.portlet-body').css('padding-top')) -
        parseInt(target.find('.portlet-body').css('padding-bottom')) - 2
      if (common.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        portletBody.find('.full-height-content-body').css('height', height)
      } else {
        portletBody.css('min-height', height)
      }
    } else {
      if (common.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        target.find('.full-height-content-body').css('height', height)
      } else {
        target.css('min-height', height)
      }
    }
  })
}

export default {
  // Main init methods to initialize the layout
  // IMPORTANT!!!: Do not modify the core handlers call order.
  initHeader: function () {
    handleHeader()
  },
  setSidebarMenuActiveLink: function (mode, el) {
    handleSidebarMenuActiveLink(mode, el)
  },
  initSidebar: function ($state) {
    // layout handlers
    handleFixedSidebar() // handles fixed sidebar menu
    handleSidebarMenu() // handles main menu
    handleSidebarToggler() // handles sidebar hide/show
    addResizeHandler(handleFixedSidebar) // reinitialize fixed sidebar on window resize
  },
  initContent: function () {
    handle100HeightContent() // handles 100% height elements(block, portlet, etc)
    handleTabs() // handle bootstrah tabs
    addResizeHandler(handleSidebarAndContentHeight) // recalculate sidebar & content height on window resize
    addResizeHandler(handle100HeightContent) // reinitialize content height on window resize
  },
  initFooter: function () {
    handleGoTop() // handles scroll to top functionality in the footer
  },
  init: function () {
    this.initHeader()
    this.initSidebar()
    this.initContent()
    this.initFooter()
    handleOnResize()
  },
  // public function to fix the sidebar and content height accordingly
  fixContentHeight: function () {
    handleSidebarAndContentHeight()
  },
  initFixedSidebarHoverEffect: function () {
    handleFixedSidebarHoverEffect()
  },
  initFixedSidebar: function () {
    handleFixedSidebar()
  }
}
