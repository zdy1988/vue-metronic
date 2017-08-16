<template>
  <label class="switch-container">
    <span v-if="title">{{title}}</span>
    <input :class="switchClasses" :type="type" :name="name" :checked="status" :value="value" @change="_change" :disabled="disabled"/>
  </label>
</template>
<script>
  export default {
    name: 'SwitchBtn',
    data () {
      return {
        type: 'checkbox',
        name: '',
        status: false
      }
    },
    props: {
      value: null,
      title: {type: String},
      state: {type: String, validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      checked: {type: Boolean, default: false},
      disabled: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      switchClasses () {
        return [
          {'switch': true},
          {[`switch-${this.state}`]: !!this.state},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    model: {
      prop: 'checked',
      event: 'update:checked'
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
