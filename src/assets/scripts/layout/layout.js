/**
 Core script to handle the entire theme and core functions
 **/
import $ from 'jquery'
import App from '../global/app'

var layoutImgPath = 'layouts/layout/img/'

var layoutCssPath = 'layouts/layout/css/'

var resBreakpointMd = App.getResponsiveBreakpoint('md')

// * BEGIN:CORE HANDLERS *//
//  this function handles responsive layout on screen size resize or mobile device rotate.

//  Set proper height for sidebar and content. The content and sidebar height must be synced always.
var handleSidebarAndContentHeight = function () {
  var content = $('.page-content')
  var sidebar = $('.page-sidebar')
  var body = $('body')
  var height

  if (body.hasClass('page-footer-fixed') === true && body.hasClass('page-sidebar-fixed') === false) {
    var availableHeight = App.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight()
    var sidebarHeight = sidebar.outerHeight()
    if (sidebarHeight > availableHeight) {
      availableHeight = sidebarHeight + $('.page-footer').outerHeight()
    }
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

      if (App.getViewPort().width < resBreakpointMd) {
        height = App.getViewPort().height - headerHeight - footerHeight
      } else {
        height = sidebar.height() + 20
      }

      if ((height + headerHeight + footerHeight) <= App.getViewPort().height) {
        height = App.getViewPort().height - headerHeight - footerHeight
      }
    }
    content.css('min-height', height)
  }
}

//  Handle sidebar menu links
var handleSidebarMenuActiveLink = function (mode, el, $state) {
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
          //  url match condition
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

  // var slideSpeed = parseInt(menu.data('slide-speed'))
  // var keepExpand = menu.data('keep-expanded')

  //  begin: handle active state
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
  //  end: handle active state

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
    if (App.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
      $('.page-header .responsive-toggler').click()
    }
  }
}

//  Handle sidebar menu
var handleSidebarMenu = function () {
  //  offcanvas mobile menu
  $('.page-sidebar-mobile-offcanvas .responsive-toggler').click(function (e) {
    $('body').toggleClass('page-sidebar-mobile-offcanvas-open')
    e.preventDefault()
    e.stopPropagation()
  })

  if ($('body').hasClass('page-sidebar-mobile-offcanvas')) {
    $(document).on('click', function (e) {
      if ($('body').hasClass('page-sidebar-mobile-offcanvas-open')) {
        if ($(e.target).closest('.page-sidebar-mobile-offcanvas .responsive-toggler').length === 0 &&
          $(e.target).closest('.page-sidebar-wrapper').length === 0) {
          $('body').removeClass('page-sidebar-mobile-offcanvas-open')
          e.preventDefault()
          e.stopPropagation()
        }
      }
    })
  }

  //  handle sidebar link click
  $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
    var that = $(this).closest('.nav-item').children('.nav-link')

    if (App.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr('data-initialized') && $('body').hasClass('page-sidebar-closed') && that.parent('li').parent('.page-sidebar-menu').size() === 1) {
      return
    }

    var hasSubMenu = that.next().hasClass('sub-menu')

    if (App.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) { //  exit of hover sidebar menu
      return
    }

    if (hasSubMenu === false) {
      if (App.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
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

    if (!keepExpand) {
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
          if ($('body').hasClass('page-sidebar-fixed')) {
            menu.slimScroll({
              'scrollTo': (the.position()).top
            })
          } else {
            App.scrollTo(the, slideOffeset)
          }
        }
        handleSidebarAndContentHeight()
      })
    } else if (hasSubMenu) {
      $('.arrow', the).addClass('open')
      the.parent().addClass('open')
      sub.slideDown(slideSpeed, function () {
        if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
          if ($('body').hasClass('page-sidebar-fixed')) {
            menu.slimScroll({
              'scrollTo': (the.position()).top
            })
          } else {
            App.scrollTo(the, slideOffeset)
          }
        }
        handleSidebarAndContentHeight()
      })
    }

    e.preventDefault()
  })

  //  handle ajax links within sidebar menu
  $('.page-sidebar').on('click', ' li > a.ajaxify', function (e) {
    e.preventDefault()
    App.scrollTop()
    var url = $(this).attr('href')
    var menuContainer = $('.page-sidebar ul')

    menuContainer.children('li.active').removeClass('active')
    menuContainer.children('arrow.open').removeClass('open')

    $(this).parents('li').each(function () {
      $(this).addClass('active')
      $(this).children('a > span.arrow').addClass('open')
    })
    $(this).parents('li').addClass('active')

    if (App.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
      $('.page-header .responsive-toggler').click()
    }

    Layout.loadAjaxContent(url, $(this))
  })

  //  handle ajax link within main content
  $('.page-content').on('click', '.ajaxify', function (e) {
    e.preventDefault()
    App.scrollTop()

    var url = $(this).attr('href')

    if (App.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
      $('.page-header .responsive-toggler').click()
    }

    Layout.loadAjaxContent(url)
  })

  //  handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
  $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function () {
    App.scrollTop()
  })

  //  handle sidebar hover effect
  handleFixedSidebarHoverEffect()

  //  handle the search bar close
  $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
    e.preventDefault()
    $('.sidebar-search').removeClass('open')
  })

  //  handle the search query submit on enter press
  $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
    if (e.which === 13) {
      $('.sidebar-search').submit()
      return false // <---- Add this line
    }
  })

  //  handle close on body click
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

//  Helper function to calculate sidebar height for fixed sidebar layout.
var _calculateFixedSidebarViewportHeight = function () {
  var sidebarHeight = App.getViewPort().height - $('.page-header').outerHeight(true)
  if ($('body').hasClass('page-footer-fixed')) {
    sidebarHeight = sidebarHeight - $('.page-footer').outerHeight()
  }

  return sidebarHeight
}

//  Handles fixed sidebar
var handleFixedSidebar = function () {
  // var menu = $('.page-sidebar-menu')

  handleSidebarAndContentHeight()

  // if ($('.page-sidebar-fixed').size() === 0) {
  //   App.destroySlimScroll(menu)
  //   return
  // }

  // if (App.getViewPort().width >= resBreakpointMd && !$('body').hasClass('page-sidebar-menu-not-fixed')) {
  //   menu.attr('data-height', _calculateFixedSidebarViewportHeight())
  //   App.destroySlimScroll(menu)
  //   App.initSlimScroll(menu)
  //   handleSidebarAndContentHeight()
  // }
}

//  Handles sidebar toggler to close/hide the sidebar.
var handleFixedSidebarHoverEffect = function () {
  if ($('body').hasClass('page-sidebar-fixed')) {
    $('.page-sidebar').on('mouseenter', function () {
      if ($('body').hasClass('page-sidebar-closed')) {
        $(this).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed')
      }
    }).on('mouseleave', function () {
      if ($('body').hasClass('page-sidebar-closed')) {
        $(this).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed')
      }
    })
  }
}

//  Handles the horizontal menu
var handleHorizontalMenu = function () {
  // handle tab click
  $('.page-header').on('click', '.hor-menu a[data-toggle="tab"]', function (e) {
    e.preventDefault()
    var nav = $('.hor-menu .nav')
    var activeLink = nav.find('li.current')
    $('li.active', activeLink).removeClass('active')
    $('.selected', activeLink).remove()
    var newLink = $(this).parents('li').last()
    newLink.addClass('current')
    newLink.find('a:first').append('<span class="selected"></span>')
  })

  //  handle search box expand/collapse
  $('.page-header').on('click', '.search-form', function (e) {
    $(this).addClass('open')
    $(this).find('.form-control').focus()

    $('.page-header .search-form .form-control').on('blur', function (e) {
      $(this).closest('.search-form').removeClass('open')
      $(this).unbind('blur')
    })
  })

  //  handle hor menu search form on enter press
  $('.page-header').on('keypress', '.hor-menu .search-form .form-control', function (e) {
    if (e.which === 13) {
      $(this).closest('.search-form').submit()
      return false
    }
  })

  //  handle header search button click
  $('.page-header').on('mousedown', '.search-form.open .submit', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $(this).closest('.search-form').submit()
  })

  $(document).on('click', '.mega-menu-dropdown .dropdown-menu', function (e) {
    e.stopPropagation()
  })
}

//  Hanlde 100% height elements(block, portlet, etc)
var handle100HeightContent = function () {
  $('.full-height-content').each(function () {
    var target = $(this)
    var height

    height = App.getViewPort().height -
      $('.page-header').outerHeight(true) -
      $('.page-footer').outerHeight(true) -
      $('.page-title').outerHeight(true) -
      $('.page-bar').outerHeight(true)

    if (target.hasClass('portlet')) {
      var portletBody = target.find('.portlet-body')

      App.destroySlimScroll(portletBody.find('.full-height-content-body')) //  destroy slimscroll

      height = height -
        target.find('.portlet-title').outerHeight(true) -
        parseInt(target.find('.portlet-body').css('padding-top')) -
        parseInt(target.find('.portlet-body').css('padding-bottom')) - 5

      if (App.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        portletBody.find('.full-height-content-body').css('height', height)
        App.initSlimScroll(portletBody.find('.full-height-content-body'))
      } else {
        portletBody.css('min-height', height)
      }
    } else {
      App.destroySlimScroll(target.find('.full-height-content-body')) //  destroy slimscroll

      if (App.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        target.find('.full-height-content-body').css('height', height)
        App.initSlimScroll(target.find('.full-height-content-body'))
      } else {
        target.css('min-height', height)
      }
    }
  })
}

let Layout = new class {
  //  Main init methods to initialize the layout
  // IMPORTANT!!!: Do not modify the core handlers call order.

  initHeader () {
    handleHorizontalMenu() //  handles horizontal menu
  }

  setSidebarMenuActiveLink (mode, el) {
    handleSidebarMenuActiveLink(mode, el, null)
  }

  initSidebar ($state) {
    // layout handlers
    handleFixedSidebar() //  handles fixed sidebar menu
    handleSidebarMenu() //  handles main menu

    App.addResizeHandler(handleFixedSidebar) //  reinitialize fixed sidebar on window resize
  }

  initContent () {
    handle100HeightContent() //  handles 100% height elements(block, portlet, etc)

    App.addResizeHandler(handleSidebarAndContentHeight) //  recalculate sidebar & content height on window resize
    App.addResizeHandler(handle100HeightContent) //  reinitialize content height on window resize
  }

  init () {
    this.initHeader()
    this.initSidebar(null)
    this.initContent()
  }

  // public function to fix the sidebar and content height accordingly
  fixContentHeight () {
    handleSidebarAndContentHeight()
  }

  initFixedSidebarHoverEffect () {
    handleFixedSidebarHoverEffect()
  }

  initFixedSidebar () {
    handleFixedSidebar()
  }

  getLayoutImgPath () {
    return App.getAssetsPath() + layoutImgPath
  }

  getLayoutCssPath () {
    return App.getAssetsPath() + layoutCssPath
  }
}()

export default Layout
