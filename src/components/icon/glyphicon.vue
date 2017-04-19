<template>
  <i :class="['glyphicon','glyphicon-'+type]"
     :style="{'color': color}">
  </i>
</template>
<style lang='less'>
  @import "../../../node_modules/bootstrap/less/bootstrap";
</style>
<script>
  export default{
    props: {
      type: { type: String, required: true },
      color: { type: String }
    }
  }
</script>
