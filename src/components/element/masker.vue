<template>
  <transition name="mask-fade">
    <div :class="['modal-backdrop','bg-'+color]" :style="{opacity:opacity, zIndex:zindex-1}" v-if="show"></div>
  </transition>
</template>
<script>
  import colors from '@/untils/colors'

  export default{
    name: 'Masker',
    props: {
      show: {type: Boolean, default: false, required: true},
      color: {type: String, default: 'dark', validator: value => colors.indexOf(value) > -1},
      opacity: {type: Number, default: 0.5},
      zindex: {type: Number, default: 10049}
    }
  }
</script>
<style scoped>
  .mask-fade-enter-active {
    transition: all .3s ease;
  }
  .mask-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .mask-fade-enter, .mask-fade-leave-to {
    opacity: 0;
  }
</style>
