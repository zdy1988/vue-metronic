<template>
  <label :class="classes">
    <slot></slot>
    <input type="checkbox" :checked="status" :value="value" @change="_change" :disabled="disabled"/>
    <span></span>
  </label>
</template>
<style>
  label {
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
  }
</style>
<script>
  export default {
    name: 'Checkbox',
    data () {
      return {
        status: false
      }
    },
    props: {
      value: null,
      checked: {type: Boolean, default: false},
      disabled: {type: Boolean},
      outline: {type: Boolean},
      klass: {type: String}
    },
    model: {
      prop: 'checked',
      event: 'update:checked'
    },
    computed: {
      classes () {
        return [
          {'mt-checkbox': true},
          {'mt-checkbox-outline': !!this.outline},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    watch: {
      checked (newValue) {
        this.status = newValue
      }
    },
    created () {
      this.status = this.checked
    },
    methods: {
      _change (e) {
        this.status = e.target.checked
        this.$emit('update:checked', e.target.checked)
      }
    }
  }
</script>
