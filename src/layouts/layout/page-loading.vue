<template>
  <div class="page-spinner-bar" v-if="show">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>
<script>
  export default {
    props: {
      show: {type: Boolean, required: true}
    }
  }
</script>
