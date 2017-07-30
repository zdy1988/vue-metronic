<template>
  <div class="panel-group" @active="setActive">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Accordions',
    data () {
      return {
        accordionPanes: []
      }
    },
    props: {
      activeIndex: {type: [Number, String], default: 0}
    },
    watch: {
      activeIndex (newValue) {
        if (typeof newValue !== 'number') {
          newValue = parseInt(newValue)
        }
        this.setActiveIndex(newValue)
      }
    },
    model: {
      prop: 'activeIndex',
      event: 'update:activeIndex'
    },
    mounted () {
      var self = this
      for (let child of this.$children) {
        if (child.$options._componentTag === 'accordion-pane') {
          child.$el.onclick = function () {
            self.setActive(child)
          }
          this.accordionPanes.push(child)
        }
      }
      this.setActiveIndex(this.activeIndex)
    },
    methods: {
      setActiveIndex (index) {
        var pane = this.accordionPanes[index]
        if (pane) {
          this.setActive(pane)
        }
      },
      setActive (accordionPane) {
        var self = this
        for (let i = 0; i < this.accordionPanes.length; i++) {
          var pane = this.accordionPanes[i]
          if (accordionPane === pane) {
            pane.active = true
            self.$emit('update:activeIndex', i)
          } else {
            pane.active = false
          }
        }
      }
    }
  }
</script>
