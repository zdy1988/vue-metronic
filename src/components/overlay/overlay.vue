<template>
  <div class="mt-element-overlay">
    <div class="row">
      <div class="col-md-12">
        <div :class="themeClasses">
          <slot></slot>
          <div :class="overlayClasses">
            <h2 v-if="title">{{title}}</h2>
            <div class="mt-info">
              <slot name="content"><span v-html="content"></span></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {colorKeys} from '@/untils'
  const themes = [
    '1',
    '1-scroll-up',
    '1-scroll-down',
    '1-scroll-left',
    '1-scroll-right',
    '2',
    '2-gray-scale',
    '3',
    '4',
    '5',
    '6'
  ]

  export default {
    name: 'Overlay',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      theme: {type: String, default: '1', validator: value => themes.indexOf(value) > -1},
      title: {type: String},
      content: {type: String},
      klass: {type: String}
    },
    computed: {
      themeClasses () {
        return [
          {[`mt-overlay-${this.theme.substr(0, 1)}`]: !!this.theme},
          {[`mt-${this.theme.substr(2)}`]: !!this.theme && this.theme.length > 1}
        ]
      },
      overlayClasses () {
        return [
          {'mt-overlay': true},
          {[`bg-${this.color}-opacity`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color}
        ]
      }
    }
  }
</script>
