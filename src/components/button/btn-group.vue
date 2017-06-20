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
      shape: {type: String, validator: value => ['circle'].indexOf(value) > -1},
      size: {type: String, validator: value => ['lg', 'sm', 'xs'].indexOf(value) > -1},
      justified: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'btn-group': !!this.orientation && this.orientation === 'horizontal'},
          {'btn-group-vertical': !!this.orientation && this.orientation === 'vertical'},
          {[`btn-group-${this.shape}`]: !!this.orientation && this.orientation === 'horizontal' && !!this.shape},
          {[`btn-group-vertical-${this.shape}`]: !!this.orientation && this.orientation === 'vertical' && this.shape},
          {[`btn-group-${this.size}`]: !!this.size},
          {'btn-group-justified': !!this.justified},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    mounted () {
      if (this.justified) {
        this.$children.forEach((child) => {
          if (child.$options.name === 'Btn') {
            child.itself = 'a'
          }
        })
      }
    }
  }
</script>
