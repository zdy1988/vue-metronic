<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'NavbarNav',
    props: {
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'nav navbar-nav': true},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
