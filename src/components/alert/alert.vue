<template>
  <animated-pulse>
    <div :class="classes" v-if="show">
      <button type="button" class="close" @click="$emit('update:show',false)"></button>
      <slot><span v-html="content"></span></slot>
    </div>
  </animated-pulse>
</template>
<script>
  import {colorKeys, common} from '@/untils'

  export default {
    name: 'Alert',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      state: {type: String, default: 'success', validator: value => ['success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      show: {type: Boolean, required: true},
      content: {type: String},
      klass: {type: String}
    },
    model: {
      prop: 'show',
      event: 'update:show'
    },
    computed: {
      classes () {
        return [
          {'alert alert-dismissable': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`alert-${this.state}`]: !!this.state && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    watch: {
      show (newValue) {
        if (newValue) {
          common.scrollTo(this.$parent.$el)
        }
      }
    }
  }
</script>
