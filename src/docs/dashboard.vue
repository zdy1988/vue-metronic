<template>
  <div>
    <btn @click="_click">click</btn>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      _click () {
        this.$store.dispatch('initMessages')
      }
    }
  }
</script>
