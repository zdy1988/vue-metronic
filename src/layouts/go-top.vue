<template>
  <div class="scroll-to-top" @click="_handle">
    <i class="icon-arrow-up"></i>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    props: {
      offset: {type: Number, default: 300},
      duration: {type: Number, default: 500}
    },
    mounted () {
      var self = this
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $(window).bind('touchend touchcancel touchleave', function () {
          if ($(this).scrollTop() > self.offset) {
            $(self.$el).fadeIn(self.duration)
          } else {
            $(self.$el).fadeOut(self.duration)
          }
        })
      } else {
        $(window).scroll(function () {
          if ($(this).scrollTop() > self.offset) {
            $(self.$el).fadeIn(self.duration)
          } else {
            $(self.$el).fadeOut(self.duration)
          }
        })
      }
    },
    methods: {
      _handle () {
        $('html, body').animate({scrollTop: 0}, this.duration)
        return false
      }
    }
  }
</script>
