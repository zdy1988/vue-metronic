<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import colors from '@/untils/colors'

  export default{
    props: {
      color: {type: String, validator: (value) => { return is.inArray(value, colors) }},
      size: {type: String, default: 'lg', validator: (value) => { return is.inArray(value, ['lg', '2x', '3x', '4x', '5x']) }},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'fa-stack': true,
          [`font-${this.color}`]: !!this.color,
          [`fa-${this.size}`]: !!this.size,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
