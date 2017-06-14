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
    <masker :show="show" v-if="mask"></masker>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'

  import Masker from '@/components/common/masker'

  export default{
    props: {
      className: {type: String},
      title: {type: String, default: 'Modal Title'},
      show: {type: Boolean, required: true},
      mask: {type: Boolean, default: true},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'full']) }}
    },
    computed: {
      classes () {
        return classNames({
          'modal': true,
          [this.className]: !!this.className
        })
      }
    },
    created: function () {
      this.$watch('show', (val) => {
        if (val === true) {
          this.$emit('onOpen', this)
        } else {
          this.$emit('onClose', this)
        }
      })
    },
    methods: {
      close () {
        this.$emit('update:show', false)
      }
    },
    components: {
      Masker
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
</style>
