<template>
  <li :class="classes">
    <slot></slot>
  </li>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'ListItem',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      theme: {type: String, default: 'default', validator: value => ['default', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'list-group-item': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`list-group-item-${this.theme}`]: !!this.theme && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
