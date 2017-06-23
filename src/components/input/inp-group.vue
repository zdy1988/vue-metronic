<template>
  <div class="input-group">
    <slot></slot>
  </div>
</template>
<style>
  .input-group > .input-group-addon {
    border-right: 0;
  }
</style>
<script>
  export default{
    name: 'InpGroup',
    methods: {
      initialize () {
        this.$children.forEach((child) => {
          if (['Btn', 'Fa'].indexOf(child.$options.name) > -1) {
            this.createAddon(child)
          } else {
            child.$parent.$el.appendChild(child.$el)
          }
        })
      },
      createAddon (child) {
        if (['input-group-btn', 'input-group-addon'].indexOf(child.$el.parentElement.className) === -1) {
          var $addon = document.createElement('span')
          $addon.className = (child.$options.name === 'Btn') ? 'input-group-btn' : 'input-group-addon'
          $addon.appendChild(child.$el)
          child.$parent.$el.appendChild($addon)
        }
      }
    },
    mounted () {
      this.initialize()
    }
  }
</script>
