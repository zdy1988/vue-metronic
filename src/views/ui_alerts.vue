<template>
<row>
  <column :md="12">
    <portlet title="BOOTSTRAP SWEET ALERTS ON BUTTONS" icon="share" theme="light" color="green" bordered>
      <h4>Sweet Alert Samples</h4>
      <btn @click="defaultAlert">Default Alert</btn>
    </portlet>
  </column>
</row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import Portlet from '@/components/portlet/portlet'
  import {Btn, BtnDropdown} from '@/components/button'

  export default {
    methods: {
      defaultAlert () {
        this.$alert.default('Sweet Alerts', 'Beautiful popup alerts')
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Btn,
      BtnDropdown
    }
  }
</script>
