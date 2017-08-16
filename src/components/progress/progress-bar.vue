<template>
  <div :class="classes">
    <div :class="barClasses" role="progressbar" :style="{width: progress + '%'}">
      <span>
        <template v-if="showValue">
          {{progress}}%
        </template>
        {{title}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ProgressBar',
    props: {
      state: {type: String, validator: value => ['success', 'info', 'warning', 'danger'].indexOf(value) > -1},
      title: {type: String},
      showValue: {type: Boolean, default: false},
      max: {type: Number, default: 100},
      min: {type: Number, default: 0},
      step: {type: Number, default: 1},
      value: {type: Number, default: 0},
      stripe: {type: String, validator: value => ['static', 'active'].indexOf(value) > -1},
      klass: {type: String}
    },
    computed: {
      classes () {
        return [
          {'progress': true},
          {'progress-striped': !!this.stripe},
          {'active': !!this.stripe && this.stripe === 'active'}
        ]
      },
      barClasses () {
        return [
          {'progress-bar': true},
          {[`progress-bar-${this.state}`]: !!this.state}
        ]
      },
      progress () {
        var len = this.max - this.min
        var val = this.value - this.min
        const step = Math.pow(10, this.step)
        return Math.round((100 * step * val) / len) / step
      }
    }
  }
</script>
