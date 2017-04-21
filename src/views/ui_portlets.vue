<template>
<div>
  <portlet mode='box' color='red'>
    {{msg}}
  </portlet>
  <portlet mode='light' color='red'>
    {{msg}}
  </portlet>
  <portlet mode='box' color='blue-hoki' title='Portlet' summary='This Summary...' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='solid' color='blue-hoki' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='light' color='red' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet mode='light' color='red' bordered title='Portlet' icon='user'>
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
