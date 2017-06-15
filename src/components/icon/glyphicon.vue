<template>
  <i :class="classes"></i>
</template>
<style lang='less'>
  @import "../../../node_modules/bootstrap/less/bootstrap";
</style>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import glyphicons from '@/untils/glyphicons'
  import colors from '@/untils/colors'

  export default{
    props: {
      type: {type: String, required: true, validator: (value) => { return is.inArray(value, glyphicons) }},
      color: {type: String, validator: (value) => { return is.inArray(value, colors) }},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'glyphicon': true,
          [`glyphicon-${this.type}`]: true,
          [`font-${this.color}`]: !!this.color,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
