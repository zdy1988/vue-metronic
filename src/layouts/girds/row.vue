<template>
<div :class="classes">
  <slot></slot>
</div>
</template>
<script>
  import classNames from 'classnames'

  export default{
    props: {
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'row': true,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
