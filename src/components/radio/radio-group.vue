<template>
  <div :class="classes" @click="_click">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'RadioGroup',
    data () {
      return {
        radioGroupName: null
      }
    },
    props: {
      value: null,
      name: {type: String, default: 'RadioGroup'},
      inline: {type: Boolean}
    },
    computed: {
      classes () {
        return [
          {'mt-radio-list': !this.inline},
          {'mt-radio-inline': !!this.inline}
        ]
      }
    },
    model: {
      prop: 'value',
      event: 'update:value'
    },
    watch: {
      name () {
        this.radioGroupName = this.name
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
            if (child.$options.name === 'Radio') {
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
          if (child.$options.name === 'Radio') {
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
          if (child.$options.name === 'Radio') {
            child.radioName = this.radioGroupName
          }
        }
      }
    },
    mounted () {
      this.radioGroupName = this.name !== 'RadioGroup' ? this.name : 'RadioGroup' + parseInt(10000 * Math.random())
      this.setRadioName()
      this.refreshGroup()
    }
  }
</script>
