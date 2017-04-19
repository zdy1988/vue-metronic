<template>
  <i :class="['icon-'+type]"
     :style="{'color': color}">
  </i>
</template>
<style lang='less'>
  @import "../../../node_modules/simple-line-icons/less/simple-line-icons";
</style>
<script>
  export default{
    props: {
      type: { type: String, required: true },
      color: { type: String }
    }
  }
</script>
