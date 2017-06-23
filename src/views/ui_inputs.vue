<template>
  <row>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="settings" theme="light" bordered>
        <fm>
          <fm-group label="Name">
            <inp></inp>
          </fm-group>
          <fm-group label="Age" help="Enter Age">
            <inp></inp>
          </fm-group>
          <fm-group label="Sex" help="Enter Sex">
            <inp placeholder="Please Enter Sex"></inp>
          </fm-group>
          <fm-group label="Sex" help="Enter Sex" horizontal>
            <inp placeholder="Please Enter Sex"></inp>
          </fm-group>
          <inp placeholder="Input"></inp>
          <inp placeholder="Input" icon="user"></inp>
          <inp-group>
            <fa name="user"></fa>
            <fa name="user"></fa>
            <inp placeholder="Input"></inp>
            <btn theme="success" @click="alert">
              <fa name="arrow-left"></fa> Go! Go! Go!
            </btn>
            <btn theme="success" @click="alert">
              <fa name="arrow-left"></fa> Go! Go! Go!
            </btn>
          </inp-group>
        </fm>
      </portlet>
    </column>
  </row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import Portlet from '@/components/portlet/portlet'
  import {Btn} from '@/components/button'
  import Fa from '@/components/icon/faicon'
  import Inp from '@/components/input/inp'
  import InpGroup from '@/components/input/inp-group'
  import InpGroupBtn from '@/components/input/inp-group-btn'
  import InpGroupIcon from '@/components/input/inp-group-icon'
  import Fm from '@/components/form/fm'
  import FmGroup from '@/components/form/fm-group'

  export default{
    data () {
      return {
        text: 22,
        text2: 33,
        orientation: 'vertical',
        formattertext1: 12,
        formatter1: function (value) {
          return parseFloat(value).toFixed(2)
        },
        alert: function () {
          window.alert(1)
        }
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Btn,
      Fa,
      Inp,
      InpGroup,
      InpGroupBtn,
      InpGroupIcon,
      Fm,
      FmGroup
    }
  }
</script>
