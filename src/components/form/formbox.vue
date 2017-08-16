<template>
  <div :class="classes">
    <label :class="labelClasses" v-if="label">{{label}}</label>

    <div :class="inputOrientationClasses">
      <slot></slot>
      <span class="help-block" v-if="help">{{help}}</span>
    </div>
  </div>
</template>
<style>
  @media (min-width: 992px) {
    .form-group.form-group-horizontal .control-label{
      text-align: right;
      margin-bottom: 0;
      padding-top: 7px;
    }
  }
</style>
<script>
  export default{
    name: 'Formbox',
    props: {
      label: {type: String},
      state: {type: String, validator: value => ['success', 'warning', 'error'].indexOf(value) > -1},
      help: {type: String},
      horizontal: {type: Boolean},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'form-group row': true},
          {'form-group-horizontal': !!this.horizontal},
          {[`has-${this.state}`]: !!this.state},
          {[this.klass]: !!this.klass}
        ]
      },
      labelClasses () {
        return [
          {'control-label': true},
          {'col-md-12': !this.horizontal},
          {'col-md-3': !!this.horizontal}
        ]
      },
      inputOrientationClasses () {
        return [
          {'col-md-12': !this.horizontal},
          {'col-md-9': !!this.horizontal}
        ]
      }
    }
  }
</script>
