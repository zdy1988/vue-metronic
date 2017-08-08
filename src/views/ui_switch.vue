<template>
  <div>
    <switch-btn v-model="checked" title="开关："></switch-btn>
    <p>{{checked}}</p>
    <formbox label="开关" help="可以控制开关">
      <switch-btn v-model="checked"></switch-btn>
    </formbox>
    <p>{{checked}}</p>
    <switch-btn v-model="checked" theme="default" title="开关："></switch-btn><br>
    <switch-btn v-model="checked" theme="success" title="开关："></switch-btn><br>
    <switch-btn v-model="checked" theme="danger" title="开关："></switch-btn><br>
    <switch-btn v-model="checked" theme="info" title="开关："></switch-btn><br>
    <switch-btn v-model="checked" theme="warning" title="开关："></switch-btn><br>
    <switch-btn v-model="checked" theme="primary" title="开关："></switch-btn>
    <h3>Group</h3>
    <switch-btn-group v-model="switchGroupStatus">
      <switch-btn :value="1" theme="info" title="开关一："></switch-btn>
      <switch-btn :value="2" theme="warning" title="开关二："></switch-btn>
      <switch-btn :value="3" theme="primary" title="开关三："></switch-btn>
    </switch-btn-group>
    <p>{{switchGroupStatus}}</p>
    <h3>Group Inline</h3>
    <switch-btn-group v-model="switchGroupStatus" inline>
      <switch-btn :value="1" theme="info" title="开关一："></switch-btn>
      <switch-btn :value="2" theme="warning" title="开关二："></switch-btn>
      <switch-btn :value="3" theme="primary" title="开关三："></switch-btn>
    </switch-btn-group>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        checked: false,
        switchGroupStatus: 2
      }
    }
  }
</script>
