<template>
  <transition name="fade">
    <div class="tab-pane" :class="{active:active}" v-show="active" ref="tabPanel">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    props: {
      name: { type: String, default: 'Section' },
      cur: { type: Boolean, default: false }
    },
    created () {
      if (this.cur) {
        this.active = this.cur
      }
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
