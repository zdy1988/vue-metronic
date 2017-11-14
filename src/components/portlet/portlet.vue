<template>
  <div :class="classes">
    <slot name="ribbon"></slot>
    <div class="portlet-title">
      <div :class="caption">
        <fa :name="icon" :class="caption" v-if="icon"></fa>
        <span class="caption-subject sbold"> {{title}}</span>
        <span class="caption-helper" v-if="!!summary"> {{summary}}</span>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
      <div class="tools" v-if="tools">
        <a href="javascript:;" class="collapse" @click="fold" v-tooltip="'合并 / 展开'"> </a>
        <a href="javascript:;" class="config" @click="config" v-tooltip="'设置'"> </a>
        <a href="javascript:;" class="reload" @click="reload" v-tooltip="'刷新'"> </a>
        <a href="javascript:;" class="fullscreen" @click="fullscreen" v-tooltip="'全屏'"> </a>
        <a href="javascript:;" class="remove" @click="remove" v-tooltip="'移除'"> </a>
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

  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'
  import {Tooltip} from '@/components/tooltip'

  export default{
    name: 'Portlet',
    data () {
      return {
        hasRibbon: false,
        collapseIcon: require('../../../static/img/layouts/layout2/logo-default.png'),
        configIcon: require('../../../static/img/layouts/layout2/logo-default.png'),
        reloadIcon: require('../../../static/img/layouts/layout2/logo-default.png'),
        removeIcon: require('../../../static/img/layouts/layout2/logo-default.png')
      }
    },
    props: {
      title: {type: String, default: '标题'},
      summary: {type: String},
      icon: {type: String, validator: value => faicons.indexOf(value) > -1},
      theme: {type: String, default: 'box', validator: value => ['box', 'solid', 'light'].indexOf(value) > -1},
      color: {type: String, default: 'dark', validator: value => colorKeys.indexOf(value) > -1},
      bordered: {type: Boolean},
      tools: {type: Boolean, default: true},
      fit: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'portlet': true},
          {[this.theme]: !!this.theme},
          {[this.color]: !!this.color && this.theme !== 'light'},
          {'bordered': !!this.bordered},
          {'mt-element-ribbon portlet-fit': !!this.hasRibbon},
          {'portlet-fit': !!this.fit},
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
    mounted () {
      this.hasRibbon = !!this.$slots.ribbon
    },
    updated () {
      this.hasRibbon = !!this.$slots.ribbon
    },
    components: {
      Fa,
      Tooltip
    }
  }
</script>
