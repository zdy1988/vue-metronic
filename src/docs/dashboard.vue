<template>
  <div>
    <btn @click="_alert">alert</btn>
    <br>
    <br>
    <btn @click="_notify">notify</btn>
    <br>
    <br>
    <btn @click="_successNotify" state="success">success notify</btn>
    <btn @click="_dangerNotify" state="danger">danger notify</btn>
    <btn @click="_infoNotify" state="info">info notify</btn>
    <btn @click="_warningNotify" state="warning">warning notify</btn>
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
      _alert () {
        this.$alert(this.msg)
      },
      _notify () {
        this.$notify(this.msg, function () {
          alert(1)
        })
      },
      _successNotify () {
        this.$successNotify('提示', this.msg)
      },
      _dangerNotify () {
        this.$dangerNotify('提示', this.msg)
      },
      _infoNotify () {
        this.$infoNotify('提示', this.msg)
      },
      _warningNotify () {
        this.$warningNotify('提示', this.msg)
      }
    }
  }
</script>
