<template>
  <button :type="btnType" :class="classes" :disabled="readOnly">
    <slot></slot>
  </button>
</template>
<script>
  import classNames from 'classnames'
  export default{
    props: {
      btnType: { type: String, twoWay: false, default: 'button' },
      color: { type: String, twoWay: false, default: 'default' },
      style: { type: String, twoWay: false },
      stripe: { type: Boolean, twoWay: false },
      shape: { type: String, twoWay: false },
      outLine: { type: Boolean, twoWay: false },
      size: { type: String, twoWay: false },
      fullWidth: { type: Boolean, twoWay: false },
      upperCase: { type: Boolean, twoWay: false },
      readOnly: { type: Boolean, twoWay: false },
      className: { type: String, twoWay: false }
    },
    computed: {
      classes () {
        return classNames({
          'btn': true,
          [this.color]: !!this.color && !this.style && !this.stripe,
          [`btn-${this.style}`]: !!this.style,
          [`${this.color}-stripe`]: !!this.color && !!this.stripe && !this.style,
          [this.shape]: !!this.shape,
          'btn-outline': !!this.outLine,
          'uppercase': !!this.upperCase,
          [`btn-${this.size}`]: !!this.size,
          'btn-block': !!this.fullWidth,
          'disabled': !!this.readOnly,
          [this.className]: !!this.className
        })
      }
    }
  }
</script>
