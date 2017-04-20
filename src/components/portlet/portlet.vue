<template>
  <div :class="classes">
    <div class="portlet-title">
      <div :class="caption">
        <icon :type="icon" :class-name="caption"></icon>
        {{title}}
        <span class="caption-helper">{{summary}}</span>
      </div>
    </div>
    <div class="portlet-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import classNames from 'classnames'
  import Icon from '@/components/icon/icon.vue'
  export default{
    props: {
      title: {type: String, twoWay: false, default: 'This Title'},
      summary: {type: String, twoWay: false},
      icon: {type: String, twoWay: false, default: 'globe'},
      mode: {type: String, twoWay: false, required: true},
      theme: {type: String, twoWay: false, required: true},
      bordered: {type: Boolean, twoWay: false},
      className: {type: String, twoWay: false}
    },
    computed: {
      classes () {
        return classNames({
          'portlet': true,
          [this.mode]: !!this.mode,
          [this.theme]: !!this.theme && this.mode !== 'light',
          'bordered': !!this.bordered,
          [this.className]: !!this.className
        })
      },
      caption () {
        return classNames({
          'caption': true,
          [`font-${this.theme}`]: !!this.theme && this.mode === 'light'
        })
      }
    },
    components: {
      Icon
    }
  }
</script>
