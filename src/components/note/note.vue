<template>
  <div :class="classes">
    <h4 class="block" v-if="title">{{title}}</h4>
    <slot><span v-html="content"></span></slot>
  </div>
</template>
<script>
  import {colorKeys} from '@/untils'

  export default {
    name: 'Note',
    props: {
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      state: {type: String, default: 'success', validator: value => ['success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      title: {type: String},
      content: {type: String},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'note': true},
          {[`bg-${this.color}`]: !!this.color},
          {[`bg-font-${this.color}`]: !!this.color},
          {[`note-${this.state}`]: !!this.state && !this.color},
          {[this.klass]: !!this.klass}
        ]
      }
    }
  }
</script>
