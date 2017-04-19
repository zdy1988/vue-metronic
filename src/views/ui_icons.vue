<template>
<div>
  <icon type='user'></icon>
  <fa type='user'></fa>
  <glyphicon type='user'></glyphicon>
</div>
</template>
<script>
  import Icon from '@/components/icon/icon.vue'
  import Fa from '@/components/icon/fa.vue'
  import Glyphicon from '@/components/icon/glyphicon.vue'
  export default{
    components: {
      Icon,
      Fa,
      Glyphicon
    }
  }
</script>
