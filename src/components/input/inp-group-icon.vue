<template>
  <span class="input-group-addon">
    <i :class="classes"></i>
  </span>
</template>
<script>
  import Fa from '@/components/icon/faicon'
  export default {
    mixins: [Fa],
    name: 'InputGroupIcon'
  }
</script>
