<template>
  <button :type="btnType" :class="classes" :disabled="readOnly">
    <slot></slot>
  </button>
</template>
<script>
  import classNames from 'classnames'
  export default{
    props: {
      btnType: { type: String, default: 'button' },
      color: { type: String, default: 'default' },
      style: { type: String },
      stripe: { type: Boolean },
      shape: { type: String },
      outLine: { type: Boolean },
      size: { type: String },
      fullWidth: { type: Boolean },
      upperCase: { type: Boolean },
      readOnly: { type: Boolean },
      className: { type: String }
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
