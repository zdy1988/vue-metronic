<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'List',
    props: {
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'list-group': true},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
