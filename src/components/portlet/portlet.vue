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
  import is from 'is_js'
  import colors from '@/untils/colors'

  import Icon from '@/components/icon/icon.vue'

  export default{
    props: {
      title: {type: String, default: 'This Title'},
      summary: {type: String},
      icon: {type: String, default: 'globe'},
      mode: {type: String, required: true, validator: (value) => { return is.inArray(value, ['box', 'solid', 'light']) }},
      color: {type: String, required: true, validator: (value) => { return is.inArray(value, colors) }},
      bordered: {type: Boolean},
      className: {type: String}
    },
    computed: {
      classes () {
        return classNames({
          'portlet': true,
          [this.mode]: !!this.mode,
          [this.color]: !!this.color && this.mode !== 'light',
          'bordered': !!this.bordered,
          [this.className]: !!this.className
        })
      },
      caption () {
        return classNames({
          'caption': true,
          [`font-${this.color}`]: !!this.color && this.mode === 'light'
        })
      }
    },
    components: {
      Icon
    }
  }
</script>
