<template>
  <div :class="classes">
    <div class="portlet-title">
      <div :class="caption">
        <icon :type="icon" :class="caption" v-if="!!icon"></icon>
        <span class="caption-subject sbold"> {{title}}</span>
        <span class="caption-helper" v-if="!!summary"> {{summary}}</span>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
      <div class="tools" v-if="tools">
        <a href="javascript:;" class="collapse" @click="fold"> </a>
        <a href="javascript:;" class="config" @click="config"> </a>
        <a href="javascript:;" class="reload" @click="reload"> </a>
        <a href="javascript:;" class="fullscreen" @click="fullscreen"> </a>
        <a href="javascript:;" class="remove" @click="remove"> </a>
      </div>
    </div>
    <div class="portlet-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import classNames from 'classnames'
  import is from 'is_js'
  import colors from '@/untils/colors'

  import Icon from '@/components/icon/icon.vue'

  export default{
    props: {
      title: {type: String, default: 'Portlet Title'},
      summary: {type: String},
      icon: {type: String},
      mode: {type: String, default: 'box', validator: (value) => { return is.inArray(value, ['box', 'solid', 'light']) }},
      color: {type: String, default: 'dark', validator: (value) => { return is.inArray(value, colors) }},
      bordered: {type: Boolean},
      tools: {type: Boolean, default: true},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'portlet': true,
          [this.mode]: !!this.mode,
          [this.color]: !!this.color && this.mode !== 'light',
          'bordered': !!this.bordered,
          [this.klass]: !!this.klass
        })
      },
      caption () {
        return classNames({
          'caption': true,
          [`font-${this.color}`]: !!this.color && this.mode === 'light'
        })
      }
    },
    methods: {
      remove (e) {
        e.preventDefault()
        if ($('body').hasClass('page-portlet-fullscreen')) {
          $('body').removeClass('page-portlet-fullscreen')
        }
        $(this.$el).remove()
      },
      fullscreen (e) {
        e.preventDefault()
        function getViewPort () {
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

        var portlet = $(this.$el)
        if (portlet.hasClass('portlet-fullscreen')) {
          $(e.target).removeClass('on')
          portlet.removeClass('portlet-fullscreen')
          $('body').removeClass('page-portlet-fullscreen')
          portlet.children('.portlet-body').css('height', 'auto')
        } else {
          var height = getViewPort().height -
            portlet.children('.portlet-title').outerHeight() -
            parseInt(portlet.children('.portlet-body').css('padding-top')) -
            parseInt(portlet.children('.portlet-body').css('padding-bottom'))
          $(e.target).addClass('on')
          portlet.addClass('portlet-fullscreen')
          $('body').addClass('page-portlet-fullscreen')
          portlet.children('.portlet-body').css('height', height)
        }
      },
      reload (e) {
        this.$emit('onReload', e, this)
      },
      config (e) {
        this.$emit('onConfig', e, this)
      },
      fold (e) {
        e.preventDefault()
        var $el = $(e.target).closest('.portlet').children('.portlet-body')
        if ($(e.target).hasClass('collapse')) {
          $(e.target).removeClass('collapse').addClass('expand')
          $el.slideUp(200)
        } else {
          $(e.target).removeClass('expand').addClass('collapse')
          $el.slideDown(200)
        }
      }
    },
    components: {
      Icon
    }
  }
</script>
