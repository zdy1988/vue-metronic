<template>
  <div>
    <transition name="modal-fade">
      <div :class="classes" v-if="show" tabindex="-1" role="basic" aria-hidden="true" style="display:block">
        <div :class="['modal-dialog','modal-'+size]">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"  @click="close"></button>
              <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn dark btn-outline" @click="close">Close</button>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mask-fade" v-if='mask'>
      <div class="modal-backdrop in" v-if="show" ></div>
    </transition>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'

  export default{
    props: {
      title: {type: String, default: 'Modal Title'},
      show: {type: Boolean, required: true, validator: (value) => { return is.inArray(value, [true, false]) }},
      close: {type: Function, required: true},
      mask: {type: Boolean, default: true, validator: (value) => { return is.inArray(value, [true, false]) }},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'full']) }},
      className: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'modal': true,
          [this.className]: !!this.className
        })
      }
    }
  }
</script>
<style scoped>
  /* fade-leave-active for <2.1.8 */
  .modal-fade-enter-active {
    transition: all .3s ease;
  }
  .modal-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .modal-fade-enter, .modal-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
  .mask-fade-enter-active {
    transition: all .3s ease;
  }
  .mask-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .mask-fade-enter, .mask-fade-leave-to {
    opacity: 0;
  }
</style>
