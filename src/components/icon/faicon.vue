<template>
  <i :class="classes"></i>
</template>
<style lang='less'>
  @import "../../../node_modules/font-awesome/less/font-awesome";
</style>
<script>
  import faicons from '@/untils/faicons'
  import {colorKeys} from '@/untils'

  export default{
    name: 'Fa',
    data () {
      return {
        stack: ''
      }
    },
    props: {
      name: {type: String, required: true, validator: value => faicons.indexOf(value) > -1},
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      size: {type: String, validator: value => ['lg', '2x', '3x', '4x', '5x'].indexOf(value) > -1},
      pulse: {type: Boolean},
      spin: {type: Boolean},
      border: {type: Boolean},
      fixedWidth: {type: Boolean},
      rotate: {type: Number, validator: value => [90, 180, 270].indexOf(value) > -1},
      flip: {type: String, validator: value => ['horizontal', 'vertical'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'fa': true},
          {'fa-fw': !!this.fixedWidth},
          {[`fa-${this.name}`]: !!this.name},
          {[`font-${this.color}`]: !!this.color},
          {[`fa-${this.size}`]: !!this.size},
          {[`fa-${this.pulse}`]: !!this.pulse},
          {[`fa-${this.spin}`]: !!this.spin},
          {[`fa-${this.border}`]: !!this.border},
          {[`fa-rotate-${this.rotate}`]: !!this.rotate},
          {[`fa-flip-${this.flip}`]: !!this.flip},
          {[`fa-stack-${this.stack}`]: !!this.stack},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
