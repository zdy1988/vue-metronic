<template>
  <div class="input-group">
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
    name: 'InputboxGroup',
    methods: {
      updateGroup () {
        if (this.$slots.default) {
          for (let node of this.$slots.default) {
            var VNode = node.componentInstance
            if (VNode) {
              if (['Btn', 'Fa'].indexOf(VNode.$options.name) > -1) {
                var $addon = document.createElement('span')
                $addon.className = (VNode.$options.name === 'Btn') ? 'input-group-btn' : 'input-group-addon'
                $addon.appendChild(VNode.$el)
                VNode.$parent.$el.appendChild($addon)
              } else {
                VNode.$parent.$el.appendChild(VNode.$el)
              }
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
