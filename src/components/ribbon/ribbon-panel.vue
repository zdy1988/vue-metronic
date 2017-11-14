<template>
  <div :class="classes">
    <slot name="ribbon"></slot>
    <div class="ribbon-content">
      <slot><span v-html="content"></span></slot>
    </div>
  </div>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'RibbonPanel',
    props: {
      color: {type: String, default: 'grey-steel', validator: value => colorKeys.indexOf(value) > -1},
      content: {type: String}
    },
    computed: {
      classes () {
        return [
          {'mt-element-ribbon': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color}
        ]
      }
    }
  }
</script>
