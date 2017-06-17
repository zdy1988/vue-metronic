<template>
  <a href="javascript:;" v-if="itself === 'a'" :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
    <animated-swing>
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </animated-swing>
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
    <animated-swing>
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </animated-swing>
  </button>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import colors from '@/untils/colors'

  export default{
    data () {
      return {
        itself: 'button'
      }
    },
    props: {
      type: {type: String, default: 'button', validator: (value) => { return is.inArray(value, ['a', 'button', 'submit', 'reset']) }},
      color: {type: String, validator: (value) => { return is.inArray(value, colors) }},
      theme: {type: String, default: 'default', validator: (value) => { return is.inArray(value, ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']) }},
      stripe: {type: String, validator: (value) => { return is.inArray(value, colors) }},
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
          [this.color]: !!this.color,
          [`btn-${this.theme}`]: !!this.theme && !this.color && !this.stripe,
          [`${this.stripe}-stripe`]: !!this.color && !!this.stripe,
          [this.shape]: !!this.shape,
          'btn-outline': !!this.outline,
          [`btn-${this.size}`]: !!this.size,
          'btn-block': !!this.block,
          'disabled': !!this.disabled,
          [this.klass]: !!this.klass
        })
      }
    },
    methods: {
      _click (e) {
        this.$emit('click', e)
      }
    },
    mounted () {
      this.itself = this.type
    }
  }
</script>
