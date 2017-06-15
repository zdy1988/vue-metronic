<template>
  <i :class="classes"></i>
</template>
<style lang='less'>
  @import "../../../node_modules/font-awesome/less/font-awesome";
</style>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import faicons from '@/untils/faicons'
  import colors from '@/untils/colors'

  export default{
    props: {
      type: {type: String, required: true, validator: (value) => { return is.inArray(value, faicons) }},
      color: {type: String, validator: (value) => { return is.inArray(value, colors) }},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', '2x', '3x', '4x', '5x']) }},
      pulse: {type: Boolean},
      spin: {type: Boolean},
      border: {type: Boolean},
      rotate: {type: Number, validator: (value) => { return is.inArray(value, [90, 180, 270]) }},
      flip: {type: String, validator: (value) => { return is.inArray(value, ['horizontal', 'vertical']) }},
      stack: {type: String, validator: (value) => { return is.inArray(value, ['1x', '2x']) }},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'fa': true,
          'fa-fw': true,
          [`fa-${this.type}`]: true,
          [`font-${this.color}`]: !!this.color,
          [`fa-${this.size}`]: !!this.size,
          [`fa-${this.pulse}`]: !!this.pulse,
          [`fa-${this.spin}`]: !!this.spin,
          [`fa-${this.border}`]: !!this.border,
          [`fa-rotate-${this.rotate}`]: !!this.rotate,
          [`fa-flip-${this.flip}`]: !!this.flip,
          [`fa-stack-${this.stack}`]: !!this.stack,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
