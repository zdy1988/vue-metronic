<template>
  <div class="divider" :style="{width: '100%',marginTop: margin +'px', marginBottom: margin+'px', display: 'inline-block'}"> </div>
</template>
<script>
  export default {
    name: 'BtnDropdownDivider',
    props: {
      margin: {type: Number, default: 9}
    }
  }
</script>
