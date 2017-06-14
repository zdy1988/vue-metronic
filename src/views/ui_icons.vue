<template>
<div>
  <icon type='user' color="blue"></icon>
  <fa type='user' color="blue"></fa>
  <glyphicon type='user' color="blue"></glyphicon>
</div>
</template>
<script>
  import Icon from '@/components/icon/icon'
  import Fa from '@/components/icon/faicon'
  import Glyphicon from '@/components/icon/glyphicon'

  import icons from '@/untils/icons'
  import faicons from '@/untils/faicons'
  import glyphicons from '@/untils/glyphicons'

  export default{
    data () {
      return {
        icons: icons,
        faicons: faicons,
        glyphicons: glyphicons
      }
    },
    components: {
      Icon,
      Fa,
      Glyphicon
    }
  }
</script>
