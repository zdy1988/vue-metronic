<template>
<div :class="classes">
  <slot></slot>
</div>
</template>
<script>
  export default{
    data () {
      return {
        xsOffset: 0,
        smOffset: 0,
        mdOffset: 0,
        lgOffset: 0
      }
    },
    props: {
      xs: {type: Number, validator: value => value > 0 && value < 13},
      sm: {type: Number, validator: value => value > 0 && value < 13},
      md: {type: Number, validator: value => value > 0 && value < 13},
      lg: {type: Number, validator: value => value > 0 && value < 13},
      offset: {
        type: [Number, Object],
        validator: value => {
          if (typeof value === 'number') {
            return value > 0 && value < 13
          } else if (typeof value === 'object') {
            if (
              (typeof value.xs === 'number' && value.xs > 0 && value.xs < 13) ||
              (typeof value.sm === 'number' && value.sm > 0 && value.sm < 13) ||
              (typeof value.md === 'number' && value.md > 0 && value.md < 13) ||
              (typeof value.lg === 'number' && value.lg > 0 && value.lg < 13)
            ) {
              return true
            }
          }
          return false
        }
      },
      klass: {type: String}
    },
    watch: {
      offset (val) {
        if (typeof val === 'number') {
          this.xsOffset = val
          this.smOffset = val
          this.mdOffset = val
          this.lgOffset = val
        } else if (typeof val === 'object') {
          this.xsOffset = val.xs ? val.xs : 0
          this.smOffset = val.sm ? val.sm : 0
          this.mdOffset = val.md ? val.md : 0
          this.lgOffset = val.lg ? val.lg : 0
        } else {
          this.xsOffset = 0
          this.smOffset = 0
          this.mdOffset = 0
          this.lgOffset = 0
        }
      }
    },
    computed: {
      classes () {
        return [
          {[`col-xs-${this.xs}`]: !!this.xs},
          {[`col-sm-${this.sm}`]: !!this.sm},
          {[`col-md-${this.md}`]: !!this.md},
          {[`col-lg-${this.lg}`]: !!this.lg},
          {[`col-xs-offset-${this.xsOffset}`]: !!this.xsOffset},
          {[`col-sm-offset-${this.smOffset}`]: !!this.smOffset},
          {[`col-md-offset-${this.mdOffset}`]: !!this.mdOffset},
          {[`col-lg-offset-${this.lgOffset}`]: !!this.lgOffset},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
