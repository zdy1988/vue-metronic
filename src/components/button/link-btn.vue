<template>
  <a :href="href" :class="classes" :disabled="disabled || loading" @click="_click">
    <animated-swing>
      <span v-if="!loading" key="slot"><slot></slot></span>
      <span v-else key="loading">{{loadingText}}</span>
    </animated-swing>
  </a>
</template>
<script>
  import _btn from '../mixins/_btn'

  export default{
    name: 'LinkBtn',
    mixins: [_btn],
    props: {
      href: {type: String, default: 'javascript:;'}
    }
  }
</script>
