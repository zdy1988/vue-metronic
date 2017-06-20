<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'BtnToolbar',
    props: {
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'btn-toolbar': true},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
