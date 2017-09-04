<template>
  <select @change="_change"
    :class="classes"
    :disabled="disabled"
    :readonly="readonly"
    :multiple="multiple">
    <option value="" v-if="!!placeHolder && !multiple">{{placeHolder}}</option>
    <option v-for="option in options" :value="option[optionValue]" v-if="options.length > 0">{{option[optionText]}}</option>
    <slot></slot>
  </select>
</template>
<script>
  import _input from '../mixins/_input'

  export default {
    name: 'Selectbox',
    mixins: [_input],
    props: {
      selectValue: '',
      options: {
        type: Array,
        default: () => {
          return []
        }
      },
      placeHolder: {type: String},
      optionText: {type: String, default: 'text'},
      optionValue: {type: String, default: 'value'},
      multiple: {type: Boolean, default: false},
      klass: {type: String}
    },
    model: {
      prop: 'selectValue',
      event: 'selectValue:update'
    },
    watch: {
      selectValue (newValue) {
        this.setSelectItem(newValue)
      }
    },
    mounted () {
      this.setSelectItem(this.selectValue)
    },
    methods: {
      setSelectItem (selectValue) {
        var self = this
        for (var i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].selected = false
        }
        if (typeof selectValue === 'object') {
          selectValue.forEach(function (val) {
            let option = self.getOption(val)
            if (option) {
              option.selected = true
            }
          })
        } else {
          let option = self.getOption(selectValue)
          if (option) {
            option.selected = true
          }
        }
      },
      getOption (val) {
        for (var i = 0; i < this.$el.children.length; i++) {
          var option = this.$el.children[i]
          if (String(option.value) === String(val)) {
            return option
          }
        }
        return undefined
      },
      _change () {
        var values = []
        for (var i = 0; i < this.$el.children.length; i++) {
          var option = this.$el.children[i]
          if (option.selected && option.value !== '') {
            values.push(option.value)
          }
        }
        if (values.length > 1) {
          this.$emit('selectValue:update', values)
        } else {
          this.$emit('selectValue:update', values[0])
        }
      }
    }
  }
</script>
