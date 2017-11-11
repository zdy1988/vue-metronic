/**
 Core script to handle the entire theme and core functions
 **/
import $ from 'jquery'
import {common} from '@/untils'

const resBreakpointMd = common.getResponsiveBreakpoint('md')

//  Set proper height for sidebar and content. The content and sidebar height must be synced always.
const handleSidebarAndContentHeight = () => {
  var content = $('.page-content')
  var sidebar = $('.page-sidebar')
  var body = $('body')
  var height

  if (body.hasClass('page-footer-fixed') === true && body.hasClass('page-sidebar-fixed') === false) {
    var availableHeight = common.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight()
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

//  Handle sidebar menu links
const handleSidebarMenuActiveLink = (mode, el) => {
  var menu = $('.page-sidebar-menu')

  if (mode === 'click' || mode === 'set') {
    el = $(el)
  } else {
    return
  }

  if (!el || el.size() === 0) {
    return
  }

  if (el.attr('href') === 'javascript:' || el.attr('href') === '#') {
    return
  }
  //  begin: handle active state
  if (menu.hasClass('page-sidebar-menu-hover-submenu') === false) {
    menu.find('li.nav-item.open').each(function () {
      var match = false
      $(this).find('li').each(function () {
        if ($(this).find(' > a').attr('href') === el.attr('href')) {
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
    if (common.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
      $('.page-header .responsive-toggler').click()
    }
  }
  handleSidebarAndContentHeight()
}

//  Handle sidebar menu
const handleSidebarMenu = () => {
  //  handle sidebar link click
  $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
    var that = $(this).closest('.nav-item').children('.nav-link')

    if (common.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr('data-initialized') && $('body').hasClass('page-sidebar-closed') && that.parent('li').parent('.page-sidebar-menu').size() === 1) {
      return
    }

    var hasSubMenu = that.next().hasClass('sub-menu')

    if (common.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) { //  exit of hover sidebar menu
      return
    }

    if (hasSubMenu === false) {
      if (common.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { //  close the menu on mobile view while laoding a page
        $('.page-header .responsive-toggler').click()
      }
      return
    }
    var the = that
    var sub = that.next()
    if (sub.is(':visible')) {
      $('.arrow', the).removeClass('open')
      the.parent().removeClass('open')
      sub.slideUp(300, function () {
        handleSidebarAndContentHeight()
      })
    } else if (hasSubMenu) {
      $('.arrow', the).addClass('open')
      the.parent().addClass('open')
      sub.slideDown(300, function () {
        handleSidebarAndContentHeight()
      })
    }

    e.preventDefault()
  })

  //  handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
  $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function () {
    common.scrollTop()
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
const _calculateFixedSidebarViewportHeight = () => {
  var sidebarHeight = common.getViewPort().height - $('.page-header').outerHeight(true)
  if ($('body').hasClass('page-footer-fixed')) {
    sidebarHeight = sidebarHeight - $('.page-footer').outerHeight()
  }

  return sidebarHeight
}

//  Handles sidebar toggler to close/hide the sidebar.
const handleFixedSidebarHoverEffect = () => {
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
const handleHorizontalMenu = () => {
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
const handle100HeightContent = () => {
  $('.full-height-content').each(function () {
    var target = $(this)
    var height

    height = common.getViewPort().height -
      $('.page-header').outerHeight(true) -
      $('.page-footer').outerHeight(true) -
      $('.page-title').outerHeight(true) -
      $('.page-bar').outerHeight(true)

    if (target.hasClass('portlet')) {
      var portletBody = target.find('.portlet-body')

      // App.destroySlimScroll(portletBody.find('.full-height-content-body')) //  destroy slimscroll

      height = height -
        target.find('.portlet-title').outerHeight(true) -
        parseInt(target.find('.portlet-body').css('padding-top')) -
        parseInt(target.find('.portlet-body').css('padding-bottom')) - 5

      if (common.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        portletBody.find('.full-height-content-body').css('height', height)
        // App.initSlimScroll(portletBody.find('.full-height-content-body'))
      } else {
        portletBody.css('min-height', height)
      }
    } else {
      common.destroySlimScroll(target.find('.full-height-content-body')) //  destroy slimscroll

      if (common.getViewPort().width >= resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
        height = height - 35
        target.find('.full-height-content-body').css('height', height)
        common.initSlimScroll(target.find('.full-height-content-body'))
      } else {
        target.css('min-height', height)
      }
    }
  })
}

export const initHeader = () => {
  handleHorizontalMenu() //  handles horizontal menu
}

export const setSidebarMenuActiveLink = (mode, el) => {
  handleSidebarMenuActiveLink(mode, el)
}

export const initSidebar = () => {
  // layout handlers
  handleSidebarMenu() //  handles main menu
}

export const initContent = () => {
  handle100HeightContent() //  handles 100% height elements(block, portlet, etc)

  // common.addResizeHandler(handleSidebarAndContentHeight) //  recalculate sidebar & content height on window resize
  // common.addResizeHandler(handle100HeightContent) //  reinitialize content height on window resize
}

export const init = () => {
  initHeader()
  initSidebar(null)
  initContent()
}

export const fixContentHeight = () => {
  handleSidebarAndContentHeight()
}

export const initFixedSidebarHoverEffect = () => {
  handleFixedSidebarHoverEffect()
}
