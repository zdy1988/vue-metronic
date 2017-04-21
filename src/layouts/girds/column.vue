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
      xs: {type: Number, validator: (value) => { return is.within(value, 1, 12) }},
      sm: {type: Number, validator: (value) => { return is.within(value, 1, 12) }},
      md: {type: Number, validator: (value) => { return is.within(value, 1, 12) }},
      lg: {type: Number, validator: (value) => { return is.within(value, 1, 12) }}
    },
    computed: {
      classes () {
        return classNames({
          [`col-xs-${this.xs}`]: !!this.xs,
          [`col-sm-${this.sm}`]: !!this.sm,
          [`col-md-${this.md}`]: !!this.md,
          [`col-lg-${this.lg}`]: !!this.lg
        })
      }
    }
  }
</script>
