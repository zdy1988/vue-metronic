<template>
  <div :class="classes" @click="_click">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'SwitchBtnGroup',
    data () {
      return {
        groupName: null
      }
    },
    props: {
      value: null,
      name: {type: String, default: 'SwitchBtnGroup'},
      inline: {type: Boolean}
    },
    computed: {
      classes () {
        return [
          {'switch-group': true},
          {'switch-group-inline': !!this.inline}
        ]
      }
    },
    model: {
      prop: 'value',
      event: 'update:value'
    },
    watch: {
      name () {
        this.groupName = this.name
        this.setRadioName()
      },
      value () {
        this.refreshGroup()
      }
    },
    methods: {
      _click (e) {
        if (e.target.tagName === 'INPUT') {
          var value = ''
          for (let child of this.$children) {
            if (child.$options.name === 'SwitchBtn') {
              var status = child.$el.getElementsByTagName('input')[0].checked
              if (status) {
                let returnValue = child.value ? child.value : status
                value = returnValue
              }
              child.status = status
            }
          }
          this.$emit('update:value', value)
        }
      },
      refreshGroup () {
        for (let child of this.$children) {
          if (child.$options.name === 'SwitchBtn') {
            if (this.value === child.value) {
              child.status = true
            } else {
              child.status = false
            }
          }
        }
      },
      setRadioName () {
        for (let child of this.$children) {
          if (child.$options.name === 'SwitchBtn') {
            child.type = 'radio'
            child.name = this.groupName
          }
        }
      }
    },
    mounted () {
      this.groupName = this.name !== 'SwitchBtnGroup' ? this.name : 'SwitchBtnGroup' + parseInt(10000 * Math.random())
      this.setRadioName()
      this.refreshGroup()
    }
  }
</script>

