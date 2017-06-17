<template>
  <transition :name="name" :mode="mode">
    <slot></slot>
  </transition>
</template>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
<script>
  import _animate from './_animate'

  export default{
    mixins: [_animate],
    name: 'fade'
  }
</script>
