<template>
  <span class="input-group-btn">
    <button :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
      <animated-swing>
        <span v-if="!loading" key="slot"><slot></slot></span>
        <span v-else key="loading">{{loadingText}}</span>
      </animated-swing>
    </button>
  </span>
</template>
<style>
  .btn:not(.btn-sm):not(.btn-lg) {
    line-height: 1.44;
  }
</style>
<script>
  import Btn from '@/components/button/btn'

  export default {
    mixins: [Btn],
    name: 'InputGroupBtn'
  }
</script>
