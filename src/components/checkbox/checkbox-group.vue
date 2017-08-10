<template>
  <div :class="classes" @click="_click">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'CheckboxGroup',
    props: {
      checkedGroup: {type: Array, default: () => []},
      inline: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'mt-checkbox-list': !this.inline},
          {'mt-checkbox-inline': !!this.inline},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    model: {
      prop: 'checkedGroup',
      event: 'update:checkedGroup'
    },
    methods: {
      _click (e) {
        if (e.target.tagName === 'INPUT') {
          var values = []
          for (let child of this.$children) {
            if (child.$options.name === 'Checkbox') {
              var status = child.$el.getElementsByTagName('input')[0].checked
              if (status) {
                let returnValue = child.value ? child.value : status
                values.push(returnValue)
              }
              child.status = status
            }
          }
          this.$emit('update:checkedGroup', values)
        }
      },
      refreshGroup () {
        for (let child of this.$children) {
          if (child.$options.name === 'Checkbox') {
            if (this.checkedGroup.indexOf(child.value) > -1) {
              child.status = true
            } else {
              child.status = false
            }
          }
        }
      }
    },
    watch: {
      checkedGroup () {
        this.refreshGroup()
      }
    },
    mounted () {
      this.refreshGroup()
    }
  }
</script>
