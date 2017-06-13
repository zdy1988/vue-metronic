<template>
<row>
  <modal :show="showModal" @onDataChange="change">
    Modal body goes here
  </modal>
  <button @click="showModal = true">点击</button>
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
    },
    methods: {
      change: function (propName, newVal, oldVal) {
        this.showModal = newVal
      }
    }
  }
</script>
