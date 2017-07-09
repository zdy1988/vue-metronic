<template>
  <animated-swing>
    <div :class="classes" v-if="show">
      <button type="button" class="close" @click="$emit('update:show',false)"></button>
      <slot><span v-html="content"></span></slot>
    </div>
  </animated-swing>
</template>
<script>
  import {colorKeys} from '@/untils'
  import _scroll from '@/mixins/_scroll'

  export default {
    name: 'Alert',
    mixins: [_scroll],
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      theme: {type: String, default: 'success', validator: value => ['success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      show: {type: Boolean, required: true},
      content: {type: String},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'alert alert-dismissable': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`alert-${this.theme}`]: !!this.theme && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    watch: {
      show (newValue) {
        if (newValue) {
          this.goto(this.$parent.$el)
        }
      }
    }
  }
</script>
