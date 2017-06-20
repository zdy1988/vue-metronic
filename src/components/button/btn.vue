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
  import colors from '@/untils/colors'

  export default{
    name: 'Btn',
    data () {
      return {
        itself: 'button'
      }
    },
    props: {
      type: {type: String, default: 'button', validator: value => ['a', 'button', 'submit', 'reset'].indexOf(value) > -1},
      color: {type: String, validator: value => colors.indexOf(value) > -1},
      theme: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'].indexOf(value) > -1},
      stripe: {type: String, validator: value => colors.indexOf(value) > -1},
      shape: {type: String, validator: value => ['circle'].indexOf(value) > -1},
      outline: {type: Boolean},
      size: {type: String, validator: value => ['lg', 'sm', 'xs', 'icon-only'].indexOf(value) > -1},
      block: {type: Boolean},
      disabled: {type: Boolean},
      loading: {type: Boolean, default: false},
      loadingText: {type: String, default: 'Loading...'},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'btn': true},
          {[this.color]: !!this.color},
          {[`btn-${this.theme}`]: !!this.theme && !this.color && !this.stripe},
          {[`${this.stripe}-stripe`]: !!this.color && !!this.stripe},
          {[this.shape]: !!this.shape},
          {'btn-outline': !!this.outline},
          {[`btn-${this.size}`]: !!this.size},
          {[`btn-${this.size}`]: !!this.size},
          {'disabled': !!this.disabled},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    methods: {
      _click (e) {
        this.$emit('click', e)
      }
    },
    watch: {
      type () {
        this.itself = this.type
      }
    }
  }
</script>
