<template>
  <transition :name="name" :mode="mode">
    <slot></slot>
  </transition>
</template>
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
<script>
  import _animate from './_animate'

  export default{
    mixins: [_animate],
    name: 'slide-fade'
  }
</script>
