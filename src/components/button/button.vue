<template>
  <button :type="type" :class="classes" :disabled="disabled || loading">
    <transition name="slide-fade">
      <span v-if="!loading"><slot></slot></span>
    </transition>
    <transition name="slide-fade">
      <span v-if="loading">{{loadingText}}</span>
    </transition>
  </button>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import colors from '@/untils/colors'

  export default{
    props: {
      type: {type: String, default: 'button', validator: (value) => { return is.inArray(value, ['button', 'submit', 'reset']) }},
      color: {type: String, default: 'default', validator: (value) => { return is.inArray(value, colors) }},
      theme: {type: String, validator: (value) => { return is.inArray(value, ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']) }},
      stripe: {type: Boolean},
      shape: {type: String, validator: (value) => { return is.inArray(value, ['circle']) }},
      outline: {type: Boolean},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'xs', 'icon-only']) }},
      block: {type: Boolean},
      disabled: {type: Boolean},
      loading: {type: Boolean, default: false},
      loadingText: {type: String, default: 'Loading...'},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'btn': true,
          [this.color]: !!this.color && !this.theme && !this.stripe,
          [`btn-${this.theme}`]: !!this.theme,
          [`${this.color}-stripe`]: !!this.color && !!this.stripe && !this.theme,
          [this.shape]: !!this.shape,
          'btn-outline': !!this.outline,
          [`btn-${this.size}`]: !!this.size,
          'btn-block': !!this.block,
          'disabled': !!this.disabled,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
