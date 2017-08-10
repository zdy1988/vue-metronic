<template>
  <form :class="classes" role="form">
    <div class="form-actions top" v-if="hasTopSlot">
      <div class="btn-set pull-right">
        <slot name="top"></slot>
      </div>
    </div>
    <div class="form-body">
      <slot></slot>
    </div>
    <div class="form-actions" v-if="hasBottomSlot">
      <div class="btn-set pull-right">
        <slot name="bottom"></slot>
      </div>
    </div>
  </form>
</template>
<script>
  export default{
    name: 'FormboxGroup',
    data () {
      return {
        hasTopSlot: !!this.$slots.top,
        hasBottomSlot: !!this.$slots.bottom
      }
    },
    props: {
      seperated: {type: String, validator: value => ['row', 'border'].indexOf(value) > -1},
      stripped: {type: String, validator: value => ['row', 'label'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'form': true},
          {'form-bordered': !!this.seperated && this.seperated === 'border'},
          {'form-row-seperated': !!this.seperated && this.seperated === 'row'},
          {'form-row-stripped': !!this.seperated && this.seperated === 'border' && !!this.stripped && this.stripped === 'row'},
          {'form-label-stripped': !!this.seperated && this.seperated === 'border' && !!this.stripped && this.stripped === 'label'},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    updated () {
      this.hasTopSlot = !!this.$slots.top
      this.hasBottomSlot = !!this.$slots.bottom
    }
  }
</script>
