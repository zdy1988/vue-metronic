<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<style>
  .input-group > .input-group-addon {
    border-right: 0;
  }
  .input-group > .input-group-btn > .btn:not(.btn-sm):not(.btn-lg) {
    line-height: 1.44;
  }
</style>
<script>
  export default{
    name: 'TextboxGroup',
    props: {
      size: {type: String, validator: value => ['lg', 'sm'].indexOf(value) > -1},
      widthSize: {type: String, validator: value => ['xlarge', 'large', 'medium', 'small', 'xsmall'].indexOf(value) > -1},
      shape: {type: String, validator: value => ['circle'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'input-group': true},
          {[`input-group-${this.size}`]: !!this.size},
          {[`input-${this.widthSize}`]: !!this.widthSize},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    methods: {
      updateGroup () {
        if (this.$slots.default) {
          for (let node of this.$slots.default) {
            var VNode = node.componentInstance
            if (VNode) {
              let $inertNode
              if (['Btn', 'Fa'].indexOf(VNode.$options.name) > -1) {
                var $addon = document.createElement('span')
                $addon.className = (VNode.$options.name === 'Btn') ? 'input-group-btn' : 'input-group-addon'
                $addon.appendChild(VNode.$el)
                $inertNode = $addon
              } else {
                $inertNode = VNode.$el
              }
              // handle circle input group
              if (this.shape === 'circle') {
                if (node === this.$slots.default[0]) {
                  $inertNode.className += ' input-circle-left'
                } else if (node === this.$slots.default[this.$slots.default.length - 1]) {
                  $inertNode.className += ' input-circle-right'
                }
              }
              VNode.$parent.$el.appendChild($inertNode)
            }
          }
        }
      }
    },
    mounted () {
      this.updateGroup()
    },
    updated () {
      this.$el.innerHTML = ''
      this.updateGroup()
    }
  }
</script>
