<template>
  <i :class="classes"></i>
</template>
<style lang='less'>
  @import "../../../node_modules/simple-line-icons/less/simple-line-icons";
</style>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import icons from '@/untils/icons'
  import colors from '@/untils/colors'

  export default{
    props: {
      type: {type: String, required: true, validator: (value) => { return is.inArray(value, icons) }},
      color: {type: String, validator: (value) => { return is.inArray(value, colors) }},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          [`icon-${this.type}`]: true,
          [`font-${this.color}`]: !!this.color,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
