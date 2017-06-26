<template>
  <label :class="classes"> <slot></slot>
    <input type="radio" :checked="status" :value="value" :name="radioName" @change="_change" :disabled="disabled"/>
    <span></span>
  </label>
</template>
<script>
  export default {
    name: 'Radio',
    data () {
      return {
        status: false,
        radioName: null
      }
    },
    props: {
      value: null,
      name: null,
      checked: {type: Boolean, default: false},
      disabled: {type: Boolean},
      outline: {type: Boolean}
    },
    model: {
      prop: 'checked',
      event: 'check'
    },
    computed: {
      classes () {
        return [
          {'mt-radio': true},
          {'mt-radio-outline': !!this.outline}
        ]
      }
    },
    watch: {
      checked () {
        this.status = this.checked
      },
      name () {
        this.radioName = this.name
      }
    },
    created () {
      this.status = this.checked
      this.radioName = this.name
    },
    methods: {
      _change (e) {
        this.status = e.target.checked
        this.$emit('check', e.target.checked)
      }
    }
  }
</script>
