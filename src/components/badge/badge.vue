<template>
  <span :class="classes"> <slot></slot> </span>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'Badge',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      round: {type: Boolean, default: true},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'badge': true},
          {'badge-roundless': !this.round},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`badge-${this.state}`]: !!this.state && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
