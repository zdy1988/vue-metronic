<template>
  <div class="mt-element-step" style="cursor: pointer">
    <div :class="themeClasses">
      <div class="mt-step-desc">
        <slot name="desc">
          <span v-html="desc"></span>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import {colorKeys} from '@/untils'
  const themes = [
    'default',
    'thin',
    'no-background',
    'no-background-thin',
    'background',
    'background-thin',
    'line',
    'line-less'
  ]

  export default {
    name: 'StepPanel',
    data () {
      return {
        steps: []
      }
    },
    props: {
      activeIndex: {type: Number, default: 0},
      desc: {type: String},
      theme: {type: String, default: 'default', validator: value => themes.indexOf(value) > -1},
      allowClick: {type: Boolean},
      color: {type: String, default: 'grey-steel', validator: value => colorKeys.indexOf(value) > -1},
      activeAsync: {type: Function}
    },
    computed: {
      themeClasses () {
        return [
          {'row': true},
          {[`step-${this.theme}`]: !!this.theme && this.theme !== 'line-less'},
          {[`step-line`]: !!this.theme && this.theme === 'line-less'}
        ]
      }
    },
    methods: {
      updateSteps () {
        this.steps.length = 0
        for (let child of this.$children) {
          if (child.$options._componentTag === 'step') {
            this.steps.push(child)
          }
        }
        this.initSteps()
        this.setActiveIndex(this.activeIndex)
      },
      initSteps () {
        let width = 100 / this.steps.length
        for (let i = 0; i < this.steps.length; i++) {
          this.steps[i].theme = this.theme
          this.steps[i].width = width
          this.steps[i].padding = ['line', 'line-less'].indexOf(this.theme) !== -1 ? 0 : 15
          this.steps[i].idx = i + 1
          this.steps[i].color = this.color
          if (this.allowClick) {
            this.steps[i].click = () => this.setActive(this.steps[i])
          }
        }
        this.handleLineLess()
      },
      setActiveIndex (index) {
        var step = this.steps[index]
        if (step) {
          this.setActive(step)
        }
      },
      setActive (activeStep) {
        var self = this
        for (let i = 0; i < this.steps.length; i++) {
          var step = this.steps[i]
          var prevIndex = i - 1
          var prevStep = this.steps[prevIndex]
          if (activeStep === step) {
            if (prevStep) {
              if (this.activeAsync) {
                this.activeAsync(prevIndex, (state) => {
                  prevStep.state = state ? 'done' : 'error'
                })
              }
            }
            step.state = 'active'
            self.$emit('update:activeIndex', i)
          } else {
            step.state = step.state2
          }
        }
      },
      handleLineLess () {
        if (this.theme === 'line-less' && this.steps.length > 1) {
          this.steps[0].klass = 'first'
          this.steps[this.steps.length - 1].klass = 'last'
        }
      }
    },
    watch: {
      activeIndex (newValue) {
        this.setActiveIndex(newValue)
      }
    },
    mounted () {
      this.updateSteps()
    },
    updated () {
      this.updateSteps()
    }
  }
</script>
