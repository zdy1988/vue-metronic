<template>
  <div :class="classes">
    <div class="portlet-title">
      <div :class="caption">
        <icon :name="icon" :class="caption" v-if="!!icon"></icon>
        <span class="caption-subject sbold"> {{title}}</span>
        <span class="caption-helper" v-if="!!summary"> {{summary}}</span>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
      <div class="tools" v-if="tools">
        <a href="javascript:;" class="collapse" @click="fold" v-tooltip="Collapse/Expand"> </a>
        <a href="javascript:;" class="config" @click="config" v-tooltip="'Settings'"> </a>
        <a href="javascript:;" class="reload" @click="reload" v-tooltip="'Reload'"> </a>
        <a href="javascript:;" class="fullscreen" @click="fullscreen" v-tooltip="'Fullscreen'"> </a>
        <a href="javascript:;" class="remove" @click="remove" v-tooltip="'Remove'"> </a>
      </div>
    </div>
    <div class="portlet-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import {colorKeys} from '@/untils'

  import Icon from '@/components/icon/icon'

  export default{
    name: 'Portlet',
    props: {
      title: {type: String, default: 'Portlet Title'},
      summary: {type: String},
      icon: {type: String},
      theme: {type: String, default: 'box', validator: value => ['box', 'solid', 'light'].indexOf(value) > -1},
      color: {type: String, default: 'dark', validator: value => colorKeys.indexOf(value) > -1},
      bordered: {type: Boolean},
      tools: {type: Boolean, default: true},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'portlet': true},
          {[this.theme]: !!this.theme},
          {[this.color]: !!this.color && this.theme !== 'light'},
          {'bordered': !!this.bordered},
          {[this.klass]: !!this.klass}
        ]
      },
      caption () {
        return [
          {'caption': true},
          {[`font-${this.color}`]: !!this.color && this.theme === 'light'}
        ]
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
