<template>
  <button :type="type" :class="classes" :disabled="disabled || loading" @click="_click">
    <animated-swing>
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </animated-swing>
  </button>
</template>
<script>
  import _btn from '../mixins/_btn'

  export default{
    name: 'Btn',
    mixins: [_btn],
    props: {
      type: {type: String, default: 'button', validator: value => ['button', 'submit', 'reset'].indexOf(value) > -1}
    }
  }
</script>
