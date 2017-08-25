<template>
  <div style="display: inline-block;">
    <span ref="trigger"><slot></slot></span>
    <div :class="classes" ref="popover" v-click-outside="_close">
      <div class="arrow"></div>
      <h3 class="popover-title" v-if="title">{{title}}</h3>
      <div class="popover-content">
        <slot name="content"><span v-html="content"></span></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import _tether from '@/mixins/_tether'

  export default{
    name: 'Popover',
    mixins: [_tether],
    props: {
      title: {type: String},
      content: {type: String},
      triggers: {type: String, default: 'click'}
    },
    computed: {
      classes () {
        return [
          {'popover': true},
          {'show': this.visible},
          {[this.placement]: !!this.placement}
        ]
      }
    },
    methods: {
      _close () {
        this.visible = false
      }
    }
  }
</script>
