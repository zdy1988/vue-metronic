<template>
<row>
  <modal :show='showModal'></modal>
  <button @click="showModal = !showModal">点击</button>
</row>
</template>
<script>
  import Row from '@/layouts/girds/row'
  import Modal from '@/components/modal/modal'

  export default{
    data () {
      return {
        showModal: false
      }
    },
    components: {
      Modal,
      Row
    }
  }
</script>
