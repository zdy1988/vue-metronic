<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Well',
    props: {
      size: {type: String, validator: value => ['lg', 'sm'].indexOf(value) > -1}
    },
    computed: {
      classes () {
        return [
          {'well': true},
          {[`well-${this.size}`]: !!this.size}
        ]
      }
    }
  }
</script>
