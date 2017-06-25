<template>
  <form :class="classes" role="form">
    <div class="form-body">
      <slot></slot>
    </div>
    <div class="form-actions" v-if="hasSlot">
      <slot name="actions"></slot>
    </div>
  </form>
</template>
<script>
  export default{
    name: 'FormboxGroup',
    data () {
      return {
        hasSlot: !!this.$slots.actions
      }
    },
    props: {
      seperated: {type: String, validator: value => ['row', 'border'].indexOf(value) > -1},
      stripped: {type: String, validator: value => ['row', 'label'].indexOf(value) > -1}
    },
    computed: {
      classes () {
        return [
          {'form': true},
          {'form-bordered': !!this.seperated && this.seperated === 'border'},
          {'form-row-seperated': !!this.seperated && this.seperated === 'row'},
          {'form-row-stripped': !!this.seperated && this.seperated === 'border' && !!this.stripped && this.stripped === 'row'},
          {'form-label-stripped': !!this.seperated && this.seperated === 'border' && !!this.stripped && this.stripped === 'label'}
        ]
      }
    },
    updated () {
      this.hasSlot = !!this.$slots.actions
    }
  }
</script>
