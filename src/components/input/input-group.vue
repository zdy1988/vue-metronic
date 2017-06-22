<template>
  <div :class="{'input-group': hasSlot}">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        hasSlot: false
      }
    },
    updated () {
      this.hasSlot = !!this.$slots.left || !!this.$slots.right
    }
  }
</script>
