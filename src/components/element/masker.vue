<template>
  <transition name="mask-fade">
    <div :class="['modal-backdrop','bg-'+color]" :style="styles" v-if="show"></div>
  </transition>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default{
    name: 'Masker',
    props: {
      show: {type: Boolean, default: false, required: true},
      color: {type: String, default: 'dark', validator: value => colorKeys.indexOf(value) > -1},
      opacity: {type: Number, default: 0.5},
      zindex: {type: Number, default: 10049},
      delay: {type: Number, default: 0}
    },
    computed: {
      styles () {
        return [
          {'opacity': this.opacity},
          {'z-index': this.zindex - 1},
          {'transition-delay': this.delay + 's'}
        ]
      }
    }
  }
</script>
<style scoped>
  .mask-fade-enter-active {
    transition: opacity ease;
  }
  .mask-fade-leave-active {
    transition: opacity ease;
  }
  .mask-fade-enter, .mask-fade-leave-to {
    opacity: 0;
  }
</style>
