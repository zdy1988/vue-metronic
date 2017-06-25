<template>
  <row>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="settings" theme="light" bordered>
        <formbox-group>
          <formbox label="Name">
            <inputbox></inputbox>
          </formbox>
          <formbox label="Age" help="Enter Age">
            <inputbox></inputbox>
          </formbox>
          <formbox label="Sex" help="Enter Sex">
            <inputbox placeholder="Please Enter Sex"></inputbox>
          </formbox>
          <formbox label="Sex" help="Enter Sex" horizontal>
            <inputbox placeholder="Please Enter Sex" shape="circle"></inputbox>
          </formbox>
          <inputbox placeholder="Input"></inputbox>
          <br>
          <inputbox placeholder="Input" icon="user"></inputbox>
          <br>
          <inputbox-group>
            <fa name="user"></fa>
            <fa name="user-md"></fa>
            <fa name="user"></fa>
            <inputbox placeholder="Input"></inputbox>
            <btn theme="success" @click="alert" v-for="num in numbers" :key="num">
              <fa name="arrow-left"></fa> Go! Go! Go! {{num}}
            </btn>
            <btn theme="success" @click="alert">
              <fa name="arrow-left"></fa> Go! Go! Go! {{num}}
            </btn>
          </inputbox-group>
          <btn slot="actions">Click</btn>
        </formbox-group>
        <br>
        <h4>Form Row Seperated</h4>
        <formbox-group seperated="row">
          <formbox label="Name">
            <inputbox></inputbox>
          </formbox>
          <formbox label="Age">
            <inputbox></inputbox>
          </formbox>
          <formbox label="Sex">
            <inputbox></inputbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Row Bordered</h4>
        <formbox-group seperated="border">
          <formbox label="Name" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Age" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <inputbox></inputbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Label Stripped</h4>
        <formbox-group seperated="border" stripped="label">
          <formbox label="Name" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Age" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <inputbox></inputbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Row Stripped</h4>
        <formbox-group seperated="border" stripped="row">
          <formbox label="Name" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Age" horizontal>
            <inputbox></inputbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <inputbox></inputbox>
          </formbox>
          <div class="row text-center" slot="actions">
            <btn>Click</btn>
          </div>
        </formbox-group>
      </portlet>
    </column>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="settings" theme="light" bordered>
        <h4>Checkbox Style</h4>
        <row class="padding-tb-20">
          <column :md="12">
            <checkbox>Default</checkbox>  <checkbox outline style="margin-left: 20px;">Outline</checkbox>
          </column>
        </row>
        <h4>Checkbox Status</h4>
        <formbox-group>
          <formbox>
            <checkbox-group inline>
              <checkbox v-model="checkboxStatus">Default</checkbox>
            </checkbox-group>
            <inputbox-group>
              <inputbox v-model="checkboxStatus" disabled></inputbox>
              <btn @click="checkboxStatus = !checkboxStatus" theme="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </inputbox-group>
          </formbox>
        </formbox-group>
        <h4>Checkbox Group Style</h4>
        <formbox-group>
          <formbox label="Checkbox" horizontal>
            <checkbox-group>
              <checkbox>Default</checkbox>
              <checkbox>Default</checkbox>
              <checkbox>Default</checkbox>
            </checkbox-group>
          </formbox>
          <formbox label="Checkbox Inline" horizontal>
            <checkbox-group inline>
              <checkbox>Default</checkbox>
              <checkbox>Default</checkbox>
              <checkbox>Default</checkbox>
            </checkbox-group>
          </formbox>
        </formbox-group>
        <h4>Checkbox Group Status</h4>
        <formbox-group>
          <formbox>
            <checkbox-group inline v-model="checkboxGroupStatus">
              <checkbox :value="item.value" v-for="item in checkboxGroup" :key="item.value">{{item.name}}</checkbox>
            </checkbox-group>
            <inputbox-group>
              <inputbox v-model="checkboxGroupStatus" disabled></inputbox>
              <btn @click="checkboxGroupStatus = ['green']" theme="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </inputbox-group>
          </formbox>
        </formbox-group>
      </portlet>
    </column>
  </row>
</template>
<script>
  import {Row, Column} from '@/layouts/girds'
  import Portlet from '@/components/portlet/portlet'
  import {Btn} from '@/components/button'
  import Fa from '@/components/icon/faicon'
  import Formbox from '@/components/form/formbox'
  import FormboxGroup from '@/components/form/formbox-group'
  import Inputbox from '@/components/input/inputbox'
  import InputboxGroup from '@/components/input/inputbox-group'
  import Checkbox from '@/components/input/checkbox'
  import CheckboxGroup from '@/components/input/checkbox-group'

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
        },
        numbers: [1, 2],
        checkboxStatus: true,
        checkboxGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        checkboxGroupStatus: ['red', 'blue']
      }
    },
    components: {
      Row,
      Column,
      Portlet,
      Btn,
      Fa,
      Formbox,
      FormboxGroup,
      Inputbox,
      InputboxGroup,
      Checkbox,
      CheckboxGroup
    }
  }
</script>
