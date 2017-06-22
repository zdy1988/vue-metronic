<template>
  <div class="form-group row">
    <div :class="labelOrientationClasses" v-if="label">
      <label class="control-label">{{label}}</label>
    </div>
    <div :class="inputOrientationClasses">
      <div :class="inputGroupClasses">
        <slot name="left"></slot>
        <div :class="inputIconClasses">
          <fa :name="icon" v-if="icon"></fa>
          <input ref="input"
                 :placeholder="placeholder"
                 :class="classes"
                 :id="id"
                 :name="name"
                 :value="value"
                 :type="type"
                 :disabled="disabled"
                 :readonly="readonly"
                 @input="_input"
                 @change="_change"
                 @keyup="_keyup"
                 @focus="_focus"
                 @blur="_blur">
        </div>
        <slot name="right"></slot>
      </div>
      <span class="help-block" v-if="help">{{help}}</span>
    </div>
  </div>
</template>
<style>


  .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
    padding-bottom: 7px;
  }
</style>
<script>
  import Fa from '@/components/icon/faicon'

  export default{
    props: {
      id: {type: String},
      name: {type: String},
      value: null,
      type: {type: String, default: 'text'},
      size: {type: String, default: '', validator: value => ['', 'lg', 'sm'].indexOf(value) > -1},
      disabled: {type: Boolean},
      readonly: {type: Boolean},
      label: {type: String},
      help: {type: String},
      placeholder: {type: String},
      orientation: {type: String, default: 'horizontal', validator: value => ['vertical', 'horizontal'].indexOf(value) > -1},
      icon: {type: String},
      iconPosition: {type: String, default: 'left', validator: value => ['left', 'right'].indexOf(value) > -1},
      formatter: {type: Function},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'form-control': true},
          {[`input-${this.size}`]: !!this.size},
          {[this.klass]: !!this.klass}
        ]
      },
      labelOrientationClasses () {
        return [
          {'col-md-12': this.orientation === 'horizontal'},
          {'col-md-3': this.orientation === 'vertical'}
        ]
      },
      inputOrientationClasses () {
        return [
          {'col-md-12': this.orientation === 'horizontal'},
          {'col-md-9': this.orientation === 'vertical'}
        ]
      },
      inputIconClasses () {
        return [
          {'input-icon': !!this.icon},
          {[this.iconPosition]: !!this.icon && !!this.iconPosition}
        ]
      },
      inputGroupClasses () {
        return [
          {'input-group': (this.$slots.left || this.$slots.right)}
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
