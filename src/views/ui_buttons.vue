<template>
    <div>
        <header-component/>
        <div>this is template body</div>
        <other-component/>
    </div>
</template>
<script>
  import Icon from '@/components/icon/icon.vue'
  import Button from '@/components/button/button.vue'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Icon,
      Button
    }
  }
</script>
