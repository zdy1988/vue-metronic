<template>
<row>
  <column :md="12">
    <portlet title="BOOTSTRAP SWEET ALERTS ON BUTTONS" icon="share" theme="light" color="green" bordered>
      <h4>Sweet Alert Samples</h4>
      <btn @click="defaultAlert">Default Alert</btn>
      <btn @click="infoAlert" theme="info">Info Alert</btn>
      <btn @click="warningAlert" theme="warning">Warning Alert</btn>
      <btn @click="dangerAlert" theme="danger">Danger Alert</btn>
      <btn @click="successAlert" theme="success">Success Alert</btn>
      <h4>Sweet Alert Samples with Confimation Message</h4>
      <btn @click="confirm">Agree to Terms & Conditions</btn>
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
        this.$alert('Sweet Alerts', 'Beautiful popup alerts')
      },
      infoAlert () {
        this.$infoAlert('Sweet Alerts', 'Beautiful popup alerts')
      },
      warningAlert () {
        this.$warningAlert('Sweet Alerts', 'Beautiful popup alerts')
      },
      dangerAlert () {
        this.$dangerAlert('Sweet Alerts', 'Beautiful popup alerts')
      },
      successAlert () {
        this.$successAlert('Sweet Alerts', 'Beautiful popup alerts')
      },
      confirm () {
        this.$confirm('Do you agree to the Terms and Conditions?', function () {
          this.$successAlert('Sweet Alerts', 'Beautiful popup alerts')
        }, function () {
          this.$dangerAlert('Sweet Alerts', 'Beautiful popup alerts')
        })
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
