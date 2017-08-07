<template>
  <animated-fade-in>
    <div :class="tabPaneClasses" v-show="active" ref="tabPanel">
      <slot></slot>
    </div>
  </animated-fade-in>
</template>
<script>
  export default {
    name: 'TabPane',
    data () {
      return {
        active: false
      }
    },
    props: {
      name: { type: String, default: '标签页' },
      icon: {type: String},
      cur: { type: Boolean, default: false },
      klass: {type: String}
    },
    computed: {
      tabPaneClasses () {
        return [
          {'tab-pane': true},
          {'active': this.active},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    created () {
      this.active = this.cur
    }
  }
</script>
