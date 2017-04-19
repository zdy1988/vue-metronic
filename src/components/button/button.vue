<template>
  <button :type="btnType" :class="classes" :disabled="readOnly" :data-style="loadingStyle" data-spinner-color="#333">
    <slot></slot>
  </button>
</template>
<script>
  export default{
    props: {
      btnType: { type: String, default: 'button' },
      color: { type: String, default: 'default' },

    }
  }
</script>
