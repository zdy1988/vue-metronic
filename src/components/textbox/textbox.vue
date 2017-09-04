<template>
  <div :class="groupClasses" v-if="icon || hasSlot">
    <slot name="before"></slot>
    <fa ref="faicon" :name="icon" :color="iconColor" :spin="iconSpin" v-if="icon"></fa>
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
    <slot name="after"></slot>
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
  import _input from '../mixins/_input'

  export default {
    name: 'Textbox',
    mixins: [_input],
    data () {
      return {
        hasSlot: !!this.$slots.before || !!this.$slots.after
      }
    },
    props: {
      value: null,
      type: {type: String, default: 'text'},
      formatter: {type: Function},
      icon: {type: String},
      iconPosition: {type: String, default: 'left', validator: value => ['left', 'right'].indexOf(value) > -1},
      iconColor: {type: String},
      iconSpin: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      groupClasses () {
        return [
          {'input-group': !!this.hasSlot},
          {[`input-group-${this.size}`]: !!this.hasSlot && !!this.size},
          {'input-icon': !!this.icon},
          {[`input-icon-${this.size}`]: !!this.icon && !!this.size},
          {[`input-${this.widthSize}`]: !!this.widthSize},
          {[this.iconPosition]: !!this.icon && !!this.iconPosition},
          {[this.klass]: !!this.klass}
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
      },
      handleGroupCirCle () {
        if (this.shape === 'circle') {
          this.$el.childNodes[0].className += ' input-circle-left'
          this.$el.childNodes[this.$el.childNodes.length - 1].className += ' input-circle-right'
        }
      },
      updateGroup () {
        if (this.hasSlot) {
          this.$el.innerHTML = ''
          this.updateSlot(this.$slots.before)
          if (this.$refs.faicon) {
            this.$el.appendChild(this.$refs.faicon.$el)
          }
          this.$el.appendChild(this.$refs.input)
          this.updateSlot(this.$slots.after)
          this.handleGroupCirCle()
        }
      },
      updateSlot (slot) {
        if (!slot) {
          return
        }
        for (let node of slot) {
          var VNode = node.componentInstance
          if (VNode) {
            let $inertNode
            if (['Btn', 'Fa'].indexOf(VNode.$options.name) > -1) {
              var $addon = document.createElement('span')
              $addon.className = (VNode.$options.name === 'Btn') ? 'input-group-btn' : 'input-group-addon'
              $addon.appendChild(VNode.$el)
              $inertNode = $addon
            } else {
              $inertNode = VNode.$el
            }
            VNode.$parent.$el.appendChild($inertNode)
          }
        }
      }
    },
    mounted () {
      this.updateGroup()
    },
    components: {
      Fa
    }
  }
</script>
