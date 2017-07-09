<template>
  <span :class="classes"> <slot></slot> </span>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'Badge',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      theme: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      shape: {type: String, validator: value => ['circle', 'square'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'badge': true},
          {'badge-roundless': !!this.shape && this.shape === 'square'},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`badge-${this.theme}`]: !!this.theme && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
