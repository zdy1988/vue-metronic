<template>
  <div :class="classes">
    <div class="panel-heading" v-if="hasHeader">
      <h3 class="panel-title" v-if="title">{{title}}</h3>
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <slot name="table"></slot>
    <slot name="list"></slot>
    <div class="panel-footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Panel',
    data () {
      return {
        hasHeader: false,
        hasFooter: false
      }
    },
    props: {
      state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      title: {type: String},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'panel': true},
          {[`panel-${this.state}`]: !!this.state},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    mounted () {
      this.hasHeader = !!this.$slots.header || !!this.title
      this.hasFooter = !!this.$slots.footer
    },
    updated () {
      this.hasHeader = !!this.$slots.header || !!this.title
      this.hasFooter = !!this.$slots.footer
    }
  }
</script>
