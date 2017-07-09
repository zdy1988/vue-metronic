<template>
  <i :class="classes"></i>
</template>
<style lang='less'>
  @import "../../../node_modules/simple-line-icons/less/simple-line-icons";
</style>
<script>
  import {icons, colorKeys} from '@/untils'

  export default{
    name: 'Icon',
    props: {
      name: {type: String, required: true, validator: value => icons.indexOf(value) > -1},
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {[`icon-${this.name}`]: !!this.name},
          {[`font-${this.color}`]: !!this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
