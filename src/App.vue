<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active {
    transition-delay: .5s;
  }
</style>
