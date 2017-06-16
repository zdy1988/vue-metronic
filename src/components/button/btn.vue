<template>
  <a href="javascript:;" v-if="itself === 'a'" :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
    <slideFade :animate="loadingAnimate">
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </slideFade>
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
    <slideFade :animate="loadingAnimate">
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </slideFade>
  </button>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import colors from '@/untils/colors'

  import SlideFade from '@/components/transition/slide-fade'

  export default{
    data () {
      return {
        itself: 'button'
      }
    },
    props: {
      type: {type: String, default: 'button', validator: (value) => { return is.inArray(value, ['a', 'button', 'submit', 'reset']) }},
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
      loadingAnimate: {type: Boolean, default: false},
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
    },
    methods: {
      _click (e) {
        this.$emit('click', e)
      }
    },
    components: {
      SlideFade
    },
    mounted () {
      this.itself = this.type
    }
  }
</script>
