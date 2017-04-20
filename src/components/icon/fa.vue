<template>
  <i :class="['fa','fa-'+type,className]"
     :style="{'color': color}">
  </i>
</template>
<style lang='less'>
  @import "../../../node_modules/font-awesome/less/font-awesome";
</style>
<script>
  export default{
    props: {
      type: { type: String, required: true },
      color: { type: String },
      className: { type: String }
    }
  }
</script>
