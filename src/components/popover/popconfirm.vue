<template>
  <popover :placement="placement" :title="title" :show.sync="show">
    <btn-group slot="content">
      <btn state="success" @click="_ok">
        <fa name="check"></fa> {{okText}}
      </btn>
      <btn state="danger" @click="_cancel">
        <fa name="close"></fa> {{cancelText}}
      </btn>
    </btn-group>
    <slot></slot>
  </popover>
</template>
<script>
  import Popover from './popover'
  import {Fa} from '@/components/icon'
  import {Btn, BtnGroup} from '@/components/button'

  export default {
    name: 'Popconfirm',
    data () {
      return {
        show: false
      }
    },
    props: {
      title: {type: String, default: '请确认'},
      okText: {type: String, default: '确认'},
      cancelText: {type: String, default: '取消'},
      placement: {type: String, default: 'top'}
    },
    methods: {
      _ok () {
        this.show = false
        this.$emit('ok')
      },
      _cancel () {
        this.show = false
        this.$emit('cancel')
      }
    },
    components: {
      Popover,
      Fa,
      Btn,
      BtnGroup
    }
  }
</script>
