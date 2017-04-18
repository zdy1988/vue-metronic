import $ from 'jquery'

let QuickNav = new class {
  init () {
    if ($('.quick-nav').length > 0) {
      var stretchyNavs = $('.quick-nav')
      stretchyNavs.each(function () {
        var stretchyNav = $(this)
        var stretchyNavTrigger = stretchyNav.find('.quick-nav-trigger')

        stretchyNavTrigger.on('click', function (event) {
          event.preventDefault()
          stretchyNav.toggleClass('nav-is-visible')
        })
      })

      $(document).on('click', function (event) {
        (!$(event.target).is('.quick-nav-trigger') && !$(event.target).is('.quick-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible')
      })
    }
  }
}()

export default QuickNav
