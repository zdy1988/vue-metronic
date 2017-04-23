<template>
  <div :class="classes" tabindex="-1" role="basic" aria-hidden="true"
       :style="{'display': show ? 'block' : 'none'}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn dark btn-outline" @click="close">Close</button>
          <button type="button" class="btn green">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'
  import propsync from '@/mixins/propsync'

  export default{
    mixins: [propsync],
    props: {
      title: {type: String, default: 'This Title'},
      show: {type: Boolean, required: true, twoWay: true, validator: (value) => { return is.inArray(value, [true, false]) }}
    },
    computed: {
      classes () {
        return classNames({
          'modal': true,
          'fade': true,
          'in': this.show,
          [this.className]: !!this.className
        })
      }
    },
    methods: {
      close () {
        this.show_sync = false
      }
    }
  }
</script>
