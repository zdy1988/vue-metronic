<template>
  <row>
    <column :md="6">
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
          <span class="input-group-addon" slot="left">
            <i class="fa fa-envelope font-purple"></i>
          </span>
        </textbox>

        <h4 class="block">Input</h4>
        <input-box></input-box>
        <input-box type="textarea"></input-box>
        <input-box icon="user"></input-box>
        <input-box type="textarea" icon="user"></input-box>
        <input-box icon="user" size="lg"></input-box>
        <input-box icon="user"></input-box>
        <input-box icon="user" size="sm"></input-box>
        <input-box type="textarea" icon="user" size="lg"></input-box>
        <input-box type="textarea" icon="user"></input-box>
        <input-box type="textarea" icon="user" size="sm"></input-box>
        <input-box icon="user" disabled></input-box>
        <input-box icon="user" readonly></input-box>
        <input-box icon="user" placeholder="readonly" readonly></input-box>
        <input-box icon="user" placeholder="formatter" :formatter="formatter1" v-model="formattertext1"></input-box>
        <p>{{formattertext1}}</p>
      </portlet>
    </column>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="settings" theme="light" borderd>
        <text-box v-model="text2" help="text2">
          <span class="input-group-addon" slot="left">
              <input type="checkbox">
              <span></span>
          </span>
        </text-box>
        <p>{{text2}}</p>
      </portlet>
    </column>
  </row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import Portlet from '@/components/portlet/portlet'
  import Textbox from '@/components/input/textbox'
  import InputBox from '@/components/input/input-box'
  import TextBox from '@/components/input/text-box'
  import {Btn} from '@/components/button'
  export default{
    data () {
      return {
        text: 22,
        text2: 33,
        orientation: 'vertical',
        formattertext1: 12,
        formatter1: function (value) {
          return parseFloat(value).toFixed(2)
        }
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Textbox,
      Btn,
      InputBox,
      TextBox
    }
  }
</script>
