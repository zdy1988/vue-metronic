<template>
<div>
  <portlet>
    {{msg}}
  </portlet>
  <portlet state='box' color='green-sharp'>
    {{msg}}
  </portlet>
  <portlet state='light' color='red'>
    {{msg}}
  </portlet>
  <portlet state='box' color='blue-hoki' title='Portlet' summary='This Summary...' icon='user'>
    {{msg}}
  </portlet>
  <portlet state='solid' color='blue-hoki' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet state='light' color='red' title='Portlet' icon='user'>
    {{msg}}
  </portlet>
  <portlet state='light' color='red' bordered title='Portlet' icon='user'>
    {{msg}}
  </portlet>
</div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
