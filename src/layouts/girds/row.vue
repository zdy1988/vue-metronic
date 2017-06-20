<template>
<div :class="classes">
  <slot></slot>
</div>
</template>
<script>
  export default{
    props: {
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'row': true},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
