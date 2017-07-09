<template>
  <popover :placement="placement" :title="title" :show.sync="show">
    <btn-group slot="content">
      <btn theme="success" @click="_success">
        <fa name="check"></fa> Yes
      </btn>
      <btn theme="danger" @click="_cancel">
        <fa name="close"></fa> No
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
    name: 'PopoverConfirm',
    data () {
      return {
        show: false
      }
    },
    props: {
      title: {type: String, default: 'Are you sure?'},
      placement: {type: String, default: 'top'}
    },
    methods: {
      _success () {
        this.show = false
        this.$emit('success')
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
