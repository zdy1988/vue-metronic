<template>
  <div>
    <transition name="slide-fade">
      <div :class="classes" v-if="show" :style="{display:'block', zIndex:zindex}">
        <div :class="dialogClasses">
          <div class="modal-content" v-click-outside="_close">
            <div class="modal-header">
              <button type="button" class="close"  @click="_close"></button>
              <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <btn color="dark" outline @click="_close">关闭</btn>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <masker :show="show" v-if="mask" :zindex="zindex" :delay="0.5"></masker>
  </div>
</template>
<script>
  import Btn from '@/components/button/btn'
  import Masker from '@/components/element/masker'

  export default{
    name: 'Modal',
    data () {
      return {
        zindex: 10050
      }
    },
    props: {
      title: {type: String, default: '弹出窗'},
      show: {type: Boolean, required: true},
      mask: {type: Boolean, default: true},
      size: {type: String, validator: value => ['lg', 'sm', 'full'].indexOf(value) > -1},
      klass: {type: String}
    },
    model: {
      prop: 'show',
      event: 'update:show'
    },
    computed: {
      classes () {
        return [
          {'modal': true},
          {[this.klass]: !!this.klass}
        ]
      },
      dialogClasses () {
        return [
          {'modal-dialog': true},
          {[`modal-${this.size}`]: !!this.size}
        ]
      }
    },
    methods: {
      _close () {
        this.$emit('update:show', false)
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
            if (child.$options.name === 'Modal' && child.show) {
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
