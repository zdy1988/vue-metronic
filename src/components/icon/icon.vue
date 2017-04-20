<template>
  <i :class="['icon-'+type,className]"
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
      color: { type: String },
      className: { type: String }
    }
  }
</script>
