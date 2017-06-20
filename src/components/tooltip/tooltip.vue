<template>
  <div style="display:inline-block" @mouseenter="_show" @mouseleave="_close">
    <slot></slot>
    <div :class="classes">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        {{content}}
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      name: 'Tooltip',
      data () {
        return {
          visible: this.show
        }
      },
      props: {
        show: {type: Boolean, default: false},
        placement: {type: String, default: 'bottom', validator: value => ['top', 'bottom', 'left', 'right'].indexOf(value) > -1},
        trigger: {type: String, default: 'hover', validator: value => ['hover', 'focus'].indexOf(value) > -1},
        content: {type: String},
        delay: {type: Number, default: 0},
        html: {type: Boolean, default: false},
        container: {type: Boolean, default: false},
        viewport: {
          type: Object,
          default: () => {
            return {
              selector: 'body',
              padding: 0
            }
          }
        }
      },
      computed: {
        classes () {
          return [
            {'tooltip': true},
            {'in': this.visible},
            {[this.placement]: !!this.placement}
          ]
        }
      },
      methods: {
        _show () {
          this.visible = true
        },
        _close () {
          this.visible = false
        }
      }
    }
</script>
