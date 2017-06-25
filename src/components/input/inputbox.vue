<template>
  <div :class="iconGroupClasses" v-if="icon">
    <fa :name="icon" :color="iconColor" :spin="iconSpin" v-if="icon"></fa>
    <input ref="input"
           :is="type==='textarea'?'textarea':'input'"
           :class="classes"
           :type="type"
           :value="value"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder"
           @input="_input"
           @change="_change"
           @keyup="_keyup"
           @focus="_focus"
           @blur="_blur">
  </div>
  <input ref="input" v-else
         :is="type==='textarea'?'textarea':'input'"
         :class="classes"
         :type="type"
         :value="value"
         :disabled="disabled"
         :readonly="readonly"
         :placeholder="placeholder"
         @input="_input"
         @change="_change"
         @keyup="_keyup"
         @focus="_focus"
         @blur="_blur">
</template>
<script>
  import Fa from '@/components/icon/faicon'

  export default {
    name: 'Inputbox',
    props: {
      value: null,
      type: {type: String, default: 'text'},
      size: {type: String, validator: value => ['lg', 'sm'].indexOf(value) > -1},
      widthSize: {type: String, validator: value => ['xlarge', 'large', 'medium', 'small', 'xsmall'].indexOf(value) > -1},
      shape: {type: String, validator: value => ['circle'].indexOf(value) > -1},
      disabled: {type: Boolean},
      readonly: {type: Boolean},
      placeholder: {type: String},
      formatter: {type: Function},
      icon: {type: String},
      iconPosition: {type: String, default: 'left', validator: value => ['left', 'right'].indexOf(value) > -1},
      iconColor: {type: String},
      iconSpin: {type: String},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'form-control': true},
          {[`input-${this.size}`]: !!this.size},
          {[`input-${this.shape}`]: !!this.shape},
          {[`input-${this.widthSize}`]: !!this.widthSize},
          {[this.klass]: !!this.klass}
        ]
      },
      iconGroupClasses () {
        return [
          {'input-icon': !!this.icon},
          {[this.iconPosition]: !!this.icon && !!this.iconPosition}
        ]
      }
    },
    methods: {
      _input (e) {
        this.$emit('input', e.target.value)
      },
      _change (e) {
        const value = e.target.value
        if (this.formatter) {
          const formattedValue = this.formatter(value)
          if (formattedValue !== value) {
            this.$refs.input.value = formattedValue
            this.$emit('input', formattedValue)
          }
        }
        this.$emit('change', e)
      },
      _keyup (e) {
        this.$emit('keyup', e)
      },
      _focus (e) {
        setTimeout(function () {
          e.target.select()
        }, 0)
        this.$emit('focus', e)
      },
      _blur (e) {
        this.$emit('blur', e)
      }
    },
    components: {
      Fa
    }
  }
</script>
