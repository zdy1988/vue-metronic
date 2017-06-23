<template>
  <div class="form-group row">
    <label :class="labelClasses" v-if="label">{{label}}</label>

    <div :class="inputOrientationClasses">
      <slot></slot>
      <span class="help-block" v-if="help">{{help}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'FmGroup',
    props: {
      label: {type: String, required: true},
      help: {type: String},
      horizontal: {type: Boolean, default: false}
    },
    computed: {
      labelClasses () {
        return [
          {'control-label': true},
          {'text-left': !this.horizontal},
          {'col-md-12': !this.horizontal},
          {'col-md-3': this.horizontal}
        ]
      },
      inputOrientationClasses () {
        return [
          {'col-md-12': !this.horizontal},
          {'col-md-9': this.horizontal}
        ]
      }
    }
  }
</script>
