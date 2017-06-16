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
          'btn-toolbar': true,
          [this.klass]: !!this.klass
        })
      }
    }
  }
</script>
