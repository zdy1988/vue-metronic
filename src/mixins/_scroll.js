/**
 * Created by virus_zhh on 2017/7/9.
 */
import $ from 'jquery'

export default {
  methods: {
    goto (el, offeset) {
      el = el ? $(el) : el
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
  }
}
