<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default{
    name: 'FaStack',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      size: {type: String, default: 'lg', validator: value => ['lg', '2x', '3x', '4x', '5x'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'fa-stack': true},
          {[`font-${this.color}`]: !!this.color},
          {[`fa-${this.size}`]: !!this.size},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    mounted () {
      if (this.$children.length >= 2) {
        var index = 1
        this.$children.forEach(function (child) {
          if (child.$options._componentTag === 'faicon') {
            child.stack = index + 'x'
          }
        })
      }
    }
  }
</script>
