<template>
  <div :class="classes" @click="_toggle">
    <btn :color="color" :theme="theme">
      <fa :type="icon" v-if="icon"></fa>
      {{text}}
      <i :class="{'fa':true,'fa-angle-down':!dropup,'fa-angle-up':!!dropup}"></i>
    </btn>
    <div class="dropdown-menu" v-if="open" @mouseleave="_close">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .btn-group > div.dropdown-menu .btn {
    width: 100%;
    float: right;
  }
  .btn-group.btn-left > div.dropdown-menu .btn {
    text-align: left;
  }
  .btn-group.btn-center > div.dropdown-menu .btn {
    text-align: center;
  }
  .btn-group.btn-right > div.dropdown-menu .btn {
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
      text: {type: String, default: 'DropDown'},
      textAlign: {type: String, default: 'center', validator: (value) => { return is.inArray(value, ['left', 'center', 'right']) }},
      color: {type: String, default: 'default'},
      theme: {type: String},
      icon: {type: String, validator: (value) => { return is.inArray(value, faicons) }},
      dropup: {type: Boolean, default: false},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'btn-group': true,
          'open': this.open,
          'dropup': !!this.dropup,
          [`btn-${this.textAlign}`]: !!this.textAlign,
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
