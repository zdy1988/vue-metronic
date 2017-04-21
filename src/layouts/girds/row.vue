<template>
<div class="row">
  <slot></slot>
</div>
</template>
<script>
  export default{
    props: {
      gutter: {type: Number, default: 0}
    }
  }
</script>
