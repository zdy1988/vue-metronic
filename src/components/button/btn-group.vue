<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'

  export default{
    props: {
      orientation: {type: String, default: 'horizontal', validator: (value) => { return is.inArray(value, ['vertical', 'horizontal']) }},
      shape: {type: String, validator: (value) => { return is.inArray(value, ['circle']) }},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'xs']) }},
      justified: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'btn-group': !!this.orientation && this.orientation === 'horizontal',
          'btn-group-vertical': !!this.orientation && this.orientation === 'vertical',
          [`btn-group-${this.shape}`]: !!this.orientation && this.orientation === 'horizontal' && !!this.shape,
          [`btn-group-vertical-${this.shape}`]: !!this.orientation && this.orientation === 'vertical' && this.shape,
          [`btn-group-${this.size}`]: !!this.size,
          'btn-group-justified': !!this.justified,
          [this.klass]: !!this.klass
        })
      }
    },
    mounted () {
      if (this.justified) {
        this.$children.forEach((child) => {
          if (child.$options._componentTag === 'btn') {
            child.itself = 'a'
          }
        })
      }
    }
  }
</script>
