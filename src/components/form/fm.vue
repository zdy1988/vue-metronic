<template>
  <form class="form" role="form">
    <div class="form-body">
      <slot></slot>
    </div>
    <div class="form-actions" v-if="hasSlot">
      <slot name="actions"></slot>
    </div>
  </form>
</template>
<script>
  export default{
    name: 'Fm',
    data () {
      return {
        hasSlot: !!this.$slots.actions
      }
    },
    updated () {
      this.hasSlot = !!this.$slots.actions
    }
  }
</script>
