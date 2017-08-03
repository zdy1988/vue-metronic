<template>
  <div style="display:inline-block">
    <span ref="trigger"><slot></slot></span>
    <div :class="classes" ref="popover">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        <slot name="content"><span v-html="content"></span></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import _tether from '@/mixins/_tether'

  export default{
    name: 'Tooltip',
    mixins: [_tether],
    props: {
      content: {type: String}
    },
    computed: {
      classes () {
        return [
          {'tooltip': true},
          {'in show': this.visible},
          {[this.placement]: !!this.placement}
        ]
      }
    }
  }
</script>
