<template>
<div>
  <portlet mode='box' theme='red'>
    {{msg}}
  </portlet>
  <portlet mode='light' theme='red'>
    {{msg}}
  </portlet>
  <portlet mode='box' theme='blue-hoki' title='Portlet' summary='This Summary...' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='solid' theme='blue-hoki' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='light' theme='red' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='light' theme='red' bordered title='Portlet' icon='user'>
    {{msg}}
  </portlet>
</div>
</template>
<script>
  import Portlet from '@/components/portlet/portlet.vue'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Portlet
    }
  }
</script>
