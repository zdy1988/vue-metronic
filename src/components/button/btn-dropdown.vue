<template>
  <div :class="classes">
    <slot name="before"></slot>
    <btn :color="color" :theme="theme" :size="size" :shape="shape" @click="_toggle">
      <fa :type="icon" v-if="icon"></fa>
      {{text}}
      <i :class="{'fa':true,'fa-angle-down':!dropup,'fa-angle-up':!!dropup}"></i>
    </btn>
    <slot name="after"></slot>
    <div class="dropdown-menu" v-if="open" @mouseleave="_close">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .btn-group > div.dropdown-menu .btn {
    width: 100%;
    float: right;
    border: 0;
  }
  .btn-group.btn-text-left > div.dropdown-menu .btn {
    text-align: left;
  }
  .btn-group.btn-text-center > div.dropdown-menu .btn {
    text-align: center;
  }
  .btn-group.btn-text-right > div.dropdown-menu .btn {
    text-align: right;
  }
</style>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'
  import Btn from './btn'

  export default{
    props: {
      text: {type: String, default: ''},
      textAlign: {type: String, default: 'left', validator: (value) => { return is.inArray(value, ['left', 'center', 'right']) }},
      color: {type: String},
      shape: {type: String, validator: (value) => { return is.inArray(value, ['circle']) }},
      theme: {type: String, default: 'default'},
      icon: {type: String, validator: (value) => { return is.inArray(value, faicons) }},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'xs']) }},
      dropup: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'btn-group': true,
          'open': this.open,
          'dropup': !!this.dropup,
          [`btn-text-${this.textAlign}`]: !!this.textAlign,
          [this.klass]: !!this.klass
        })
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
