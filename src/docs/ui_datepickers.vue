<template>
  <row>
    <column :md="6">
      <portlet title="DATE PICKERS" icon="pin" theme="light" color="red" bordered>
        <h4 class="block">Default Picker</h4>
        <datepicker v-model="pickerValue"></datepicker>
        <h4 class="block">DatePicker Value: {{pickerValue}}</h4>
        <h4 class="block">Lang zh-CN</h4>
        <datepicker lang="zh-CN"></datepicker>
        <h4 class="block">Format yyyy-MM</h4>
        <datepicker lang="zh-CN" format="yyyy-mm"></datepicker>
      </portlet>
    </column>
  </row>
</template>
<script>
  export default {
    data () {
      return {
        pickerValue: '2017-07-21'
      }
    }
  }
</script>
