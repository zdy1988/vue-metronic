<template>
  <row>
    <column :md=6>
      <portlet title="DEFAULT FORM" icon="settings" theme="light" borderd>
        <textbox label="Name" help="Enter Name" placeholder="Please Enter Name" :orientation="orientation"></textbox>
        <textbox label="Age" help="Enter Age" placeholder="Please Enter Age" :orientation="orientation"></textbox>
        <textbox label="Sex" help="Enter Sex" placeholder="Please Enter Sex" :orientation="orientation"></textbox>
        <h4 class="block">Size</h4>
        <textbox label="Name" help="Enter Name" placeholder="Please Enter Name" :orientation="orientation" size="lg"></textbox>
        <textbox label="Age" help="Enter Age" placeholder="Please Enter Age" :orientation="orientation"></textbox>
        <textbox label="Sex" help="Enter Sex" placeholder="Please Enter Sex" :orientation="orientation" size="sm"></textbox>
        <h4 class="block">Disabled && Readonly</h4>
        <textbox label="Disabled" help="Set Disabled" value="11" :orientation="orientation" disabled></textbox>
        <textbox label="Readonly" help="Set Readonly" value="22" :orientation="orientation" readonly></textbox>
        <h4 class="block">Value Update</h4>
        <textbox label="Value Update" :orientation="orientation" v-model="text"></textbox>
        <textbox label="Value Update" :orientation="orientation" :value="text" readonly></textbox>
        <h4 class="block">Icon</h4>
        <textbox label="Icon" :orientation="orientation" icon="user"></textbox>
        <textbox label="Icon" :orientation="orientation" icon="user" icon-position="right" help="set right">
          <span class="input-group-addon" slot="right">
            <i class="fa fa-envelope font-purple"></i>
          </span>
        </textbox>
      </portlet>
    </column>
  </row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import Portlet from '@/components/portlet/portlet'
  import Textbox from '@/components/input/textbox'
  import {Btn} from '@/components/button'
  export default{
    data () {
      return {
        text: '11',
        orientation: 'vertical'
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Textbox,
      Btn
    }
  }
</script>
