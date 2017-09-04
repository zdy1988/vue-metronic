<template>
  <li :class="classes" v-click-outside="_close">
    <a href="javascript:;" class="dropdown-toggle" @click="_toggle">
      <fa :name="icon" v-if="icon"></fa>
      {{text}}
      <i :class="{'fa':true,'fa-angle-down':!dropup,'fa-angle-up':!!dropup}"></i>
    </a>
    <transition name="slide-fade">
      <ul class="dropdown-menu" v-if="open" @click="_close">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>
<script>
  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'

  export default {
    name: 'NavbarNavDropdown',
    props: {
      text: {type: String, default: ''},
      icon: {type: String, validator: value => faicons.indexOf(value) > -1},
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
          {[this.klass]: !!this.klass}
        ]
      }
    },
    components: {
      Fa
    }
  }
</script>
