<template>
  <div :class="classes" v-click-outside="_close">
    <btn :color="color" :state="state" :size="size" :shape="shape" @click="_toggle">
      <fa :name="icon" v-if="icon"></fa>
      {{text}}
      <i :class="{'fa':true,'fa-angle-down':!dropup,'fa-angle-up':!!dropup}"></i>
    </btn>
    <transition name="slide-fade">
      <ul class="dropdown-menu" v-if="open" @click="_close">
      <slot></slot>
    </ul>
    </transition>
  </div>
</template>
<script>
  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'
  import {Btn} from '@/components/button'
  import {colorKeys} from '@/untils'

  export default {
    name: 'Dropdown',
    props: {
      text: {type: String, default: ''},
      textAlign: {type: String, default: 'left', validator: value => ['left', 'center', 'right'].indexOf(value) > -1},
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      shape: {type: String, validator: value => ['circle'].indexOf(value) > -1},
      state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      icon: {type: String, validator: value => faicons.indexOf(value) > -1},
      size: {type: String, validator: value => ['lg', 'sm', 'xs'].indexOf(value) > -1},
      dropup: {type: Boolean, default: false},
      klass: {type: String}
    },
    data () {
      return {
        open: false
      }
    },
    methods: {
      _toggle: function () {
        this.open = !this.open
      },
      _close: function () {
        this.open = false
      }
    },
    computed: {
      classes () {
        return [
          {'dropdown': true},
          {'open': this.open},
          {'dropup': this.dropup},
          {[`btn-text-${this.textAlign}`]: !!this.textAlign},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    components: {
      Btn,
      Fa
    }
  }
</script>
