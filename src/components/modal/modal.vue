<template>
  <div>
    <transition name="modal-fade">
      <div :class="classes" v-if="show" :style="{display:'block', zIndex:zindex}">
        <div :class="dialogClasses">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"  @click="close"></button>
              <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <btn color="dark" outline @click="close">Close</btn>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <masker :show="show" v-if="mask" :zindex="zindex"></masker>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import is from 'is_js'

  import Btn from '@/components/button/btn'
  import Masker from '@/components/element/masker'

  export default{
    data () {
      return {
        zindex: 10050
      }
    },
    props: {
      title: {type: String, default: 'Modal Title'},
      show: {type: Boolean, required: true},
      mask: {type: Boolean, default: true},
      size: {type: String, validator: (value) => { return is.inArray(value, ['lg', 'sm', 'full']) }},
      klass: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'modal': true,
          [this.klass]: !!this.klass
        })
      },
      dialogClasses () {
        return classNames({
          'modal-dialog': true,
          [`modal-${this.size}`]: !!this.size
        })
      }
    },
    methods: {
      close () {
        this.$emit('close')
      }
    },
    components: {
      Btn,
      Masker
    },
    watch: {
      show (val) {
        if (val) {
          var z = 10500
          this.$parent.$children.forEach((child) => {
            if (child.$options._componentTag === 'modal' && child.show) {
              z += 1
            }
          })
          this.zindex = z
        } else {
          this.zindex = 10500
        }
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
</style>
