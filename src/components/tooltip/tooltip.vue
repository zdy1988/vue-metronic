<template>
  <div>
    <div ref="trigger" style="display:inline-block;">
      <slot></slot>
    </div>
    <div :class="classes" ref="popover">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        {{content}}
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
          {'fade in': this.visible},
          {[this.placement]: !!this.placement}
        ]
      }
    }
  }
</script>
