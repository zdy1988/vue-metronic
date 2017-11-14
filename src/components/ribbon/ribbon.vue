<template>
  <div :class="classes">
    <div :class="clippedClasses" v-if="theme === 'clipped'"></div>
    <div :class="bookmarkClasses" v-if="theme === 'bookmark'"></div>
    <slot></slot>
  </div>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'Ribbon',
    props: {
      theme: {type: String, validator: value => ['bookmark', 'clipped'].indexOf(value) > -1},
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      state: {type: String, default: 'success', validator: value => ['success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      float: {type: String, validator: value => ['left', 'right'].indexOf(value) > -1},
      border: {type: String, validator: value => ['solid', 'solid-hor', 'solid-vert', 'dash', 'dash-hor', 'dash-vert'].indexOf(value) > -1},
      vertical: {type: Boolean},
      shadow: {type: Boolean},
      round: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'ribbon': true},
          {'ribbon-clip': this.theme === 'clipped'},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`ribbon-color-${this.state}`]: !!this.state && !this.color},
          {[`ribbon-${this.float}`]: !!this.float && !this.vertical},
          {[`ribbon-vertical-${this.float}`]: !!this.float && !!this.vertical},
          {[`ribbon-shadow`]: !!this.shadow},
          {[`ribbon-border-${this.border}`]: !!this.border},
          {[`ribbon-round`]: !!this.round},
          {[this.klass]: !!this.klass}
        ]
      },
      clippedClasses () {
        return [
          {'ribbon-sub': true},
          {'ribbon-clip': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`ribbon-${this.float}`]: !!this.float}
        ]
      },
      bookmarkClasses () {
        return [
          {'ribbon-sub': true},
          {'ribbon-bookmark': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color}
        ]
      }
    }
  }
</script>
