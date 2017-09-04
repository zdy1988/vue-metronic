<template>
  <input type="text" :class="classes" :disabled="disabled" :readonly="readonly" :value="value"/>
</template>
<script>
  import $ from 'jquery'
  import 'bootstrap-datepicker'
  import _input from '../mixins/_input'

  export default {
    name: 'Datepicker',
    mixins: [_input],
    props: {
      value: null,
      lang: {type: String, default: 'en'},
      format: {type: String, default: 'yyyy-mm-dd'},
      options: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    watch: {
      value (newValue) {
        $(this.$el).val('update', newValue).trigger('input')
      },
      lang () {
        this.updatePicker()
      },
      format () {
        this.updatePicker()
      },
      options () {
        this.updatePicker()
      }
    },
    methods: {
      _input (e) {
        console.log(1)
        this.$emit('input', e.target.value)
      },
      getOptions () {
        return {
          rtl: true,
          orientation: 'left',
          autoclose: true,
          format: this.format,
          language: this.lang
        }
      },
      updatePicker () {
        var options = Object.assign(this.options, this.getOptions())
        var self = this
        $(self.$el).datepicker('destroy')
        if (options.language === 'en') {
          $(self.$el).datepicker(options)
        } else {
          import('../../../node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.' + options.language).then(module => {
            $(self.$el).datepicker(options)
          })
        }
      }
    },
    mounted () {
      var self = this
      this.$el.onchange = function () {
        self.$emit('input', self.$el.value)
      }
      this.updatePicker()
    },
    destroyed () {
      $(this.$el).datepicker('destroy')
    }
  }
</script>
<style lang="less">
  @import "../../../node_modules/bootstrap-datepicker/build/build3.less";
</style>
