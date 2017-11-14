<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'BtnGroup',
    props: {
      orientation: {type: String, default: 'horizontal', validator: value => ['vertical', 'horizontal'].indexOf(value) > -1},
      round: {type: Boolean, default: false},
      size: {type: String, validator: value => ['lg', 'sm', 'xs'].indexOf(value) > -1},
      justified: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'btn-group': !!this.orientation && this.orientation === 'horizontal'},
          {'btn-group-vertical': !!this.orientation && this.orientation === 'vertical'},
          {[`btn-group-circle`]: !!this.orientation && this.orientation === 'horizontal' && !!this.round},
          {[`btn-group-vertical-circle`]: !!this.orientation && this.orientation === 'vertical' && this.round},
          {[`btn-group-${this.size}`]: !!this.size},
          {'btn-group-justified': !!this.justified},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    mounted () {
      if (this.justified) {
        this.$children.forEach((child) => {
          if (child.$options.name !== 'LinkBtn') {
            console.error('attribute "justified" only support type "LinkBtn"!')
          }
        })
      }
    }
  }
</script>
