<template>
  <div :class="classes">
    <div class="panel-heading" v-if="hasHeader" style="cursor:pointer">
      <h3 class="panel-title" v-if="title">
        <fa :name="icon" v-if="icon"></fa>
        {{title}}
      </h3>
      <slot name="header"></slot>
    </div>
    <div :class="collapseClasses" :style="collapseStyle">
      <div class="panel-body">
        <slot></slot>
      </div>
      <slot name="table"></slot>
      <slot name="list"></slot>
      <div class="panel-footer" v-if="hasFooter">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style>
  .panel-collapse
  {
    transition: max-height .3s;
    -moz-transition: max-height .3s;
    -webkit-transition: max-height .3s;
    -o-transition: max-height .3s;
  }
  .panel-collapse.in
  {
    transition: max-height 1s;
    -moz-transition: max-height 1s;
    -webkit-transition: max-height 1s;
    -o-transition: max-height 1s;
  }
</style>
<script>
  import faicons from '@/untils/faicons'
  import Fa from '@/components/icon/faicon'

  export default {
    name: 'AccordionPane',
    data () {
      return {
        hasHeader: false,
        hasFooter: false,
        active: false
      }
    },
    props: {
      state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      title: {type: String},
      maxHeight: {type: Number, default: 200},
      cur: { type: Boolean, default: false },
      icon: {type: String, validator: value => faicons.indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'panel': true},
          {[`panel-${this.state}`]: !!this.state},
          {[this.klass]: !!this.klass}
        ]
      },
      collapseClasses () {
        return [
          {'panel-collapse': true},
          {'in': this.active}
        ]
      },
      collapseStyle () {
        return [
          {'max-height': this.active ? this.maxHeight + 'px' : '0px'},
          {'overflow': 'hidden'}
        ]
      }
    },
    created () {
      this.active = this.cur
    },
    mounted () {
      this.hasHeader = !!this.$slots.header || !!this.title
      this.hasFooter = !!this.$slots.footer
    },
    updated () {
      this.hasHeader = !!this.$slots.header || !!this.title
      this.hasFooter = !!this.$slots.footer
    },
    components: {
      Fa
    }
  }
</script>

