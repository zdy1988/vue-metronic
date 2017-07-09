<template>
  <span :class="classes"> <slot></slot> </span>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'Lable',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      theme: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'label': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`label-${this.theme}`]: !!this.theme && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
