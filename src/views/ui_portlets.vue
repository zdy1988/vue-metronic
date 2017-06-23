<template>
<div>
  <portlet>
    {{msg}}
  </portlet>
  <portlet theme='box' color='green-sharp'>
    {{msg}}
  </portlet>
  <portlet theme='light' color='red'>
    {{msg}}
  </portlet>
  <portlet theme='box' color='blue-hoki' title='Portlet' summary='This Summary...' icon='user'>
    {{msg}}
  </portlet>
  <portlet theme='solid' color='blue-hoki' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet theme='light' color='red' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet theme='light' color='red' bordered title='Portlet' icon='user'>
    {{msg}}
  </portlet>
</div>
</template>
<script>
  import Portlet from '@/components/portlet/portlet'
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
