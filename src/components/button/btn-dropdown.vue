<template>
  <div :class="classes" v-click-outside="_close">
    <slot name="before"></slot>
    <btn :color="color" :state="state" :size="size" :round="round" @click="_toggle">
      <fa :name="icon" v-if="icon"></fa>
      {{text}}
      <i :class="{'fa':true,'fa-angle-down':!dropup,'fa-angle-up':!!dropup}"></i>
    </btn>
    <slot name="after"></slot>
    <transition name="slide-fade">
      <div class="dropdown-menu" v-if="open" @click="_close">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<style>
  .btn-group div.dropdown-menu .btn {
    width: 100%;
    float: right;
    border: 0;
  }
  .btn-group.btn-text-left div.dropdown-menu .btn {
    text-align: left;
  }
  .btn-group.btn-text-center div.dropdown-menu .btn {
    text-align: center;
  }
  .btn-group.btn-text-right div.dropdown-menu .btn {
    text-align: right;
  }
</style>
<script>
  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'
  import Btn from './btn'
  import {colorKeys} from '@/untils'

  export default{
    name: 'BtnDropdown',
    props: {
      text: {type: String, default: ''},
      textAlign: {type: String, default: 'left', validator: value => ['left', 'center', 'right'].indexOf(value) > -1},
      color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
      round: {type: Boolean, default: false},
      state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      icon: {type: String, validator: value => faicons.indexOf(value) > -1},
      size: {type: String, validator: value => ['lg', 'sm', 'xs'].indexOf(value) > -1},
      dropup: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'btn-group': true},
          {'open': this.open},
          {'dropup': this.dropup},
          {[`btn-text-${this.textAlign}`]: !!this.textAlign},
          {[this.klass]: !!this.klass}
        ]
      }
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
    components: {
      Btn,
      Fa
    }
  }
</script>
