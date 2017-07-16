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
  import _input from '@/components/input/mixins/_input'

  export default {
    name: 'Textbox',
    mixins: [_input],
    props: {
      value: null,
      type: {type: String, default: 'text'},
      formatter: {type: Function},
      icon: {type: String},
      iconPosition: {type: String, default: 'left', validator: value => ['left', 'right'].indexOf(value) > -1},
      iconColor: {type: String},
      iconSpin: {type: String},
      klass: {type: String}
    },
    computed: {
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
