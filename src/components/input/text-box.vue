<template>
  <div @input="_input"
       @change="_change"
       @keyup="_keyup"
       @focus="_focus"
       @blur="_blur">
    <div :class="{'input-group': hasSlot}">
      <slot name="left"></slot>
      <input-box :type="type"
                 :value="value"
                 :disabled="disabled"
                 :readonly="readonly"
                 :placeholder="placeholder"></input-box>
      <slot name="right"></slot>
    </div>
    <span class="help-block" v-if="help">{{help}}</span>
  </div>
</template>
<script>
  import InputBox from './input-box'

  export default{
    mixins: [InputBox],
    data () {
      return {
        hasSlot: !!this.$slots.left || !!this.$slots.right
      }
    },
    props: {
      help: {type: String}
    },
    updated () {
      this.hasSlot = !!this.$slots.left || !!this.$slots.right
    },
    components: {
      InputBox
    }
  }
</script>
