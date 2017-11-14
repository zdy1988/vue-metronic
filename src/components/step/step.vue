<template>
  <div :class="classes" :style="style" @click="click">
    <div :class="numberClasses">
      {{idx}}
    </div>
    <div class="mt-step-title uppercase font-grey-cascade">
      {{title}}
    </div>
    <div class="mt-step-content font-grey-cascade">
      <slot><span v-html="content"></span></slot>
    </div>
  </div>
</template>
<script>
  // const states = ['active', 'done', 'error']
  export default {
    name: 'Step',
    data () {
      return {
        idx: 1,
        width: 33.3,
        padding: 0,
        color: '',
        state: '',
        state2: '',
        theme: '',
        klass: '',
        click: () => {}
      }
    },
    props: {
      title: {type: String},
      content: {type: String}
    },
    watch: {
      state (newValue) {
        if (newValue !== '') {
          this.state2 = newValue
        }
        if (newValue === 'active') {
          this.state2 = ''
        }
      }
    },
    computed: {
      classes () {
        return [
          {'mt-step-col': true},
          {[`bg-${this.color}`]: !!this.color},
          {[this.state]: !!this.state},
          {[this.klass]: !!this.klass}
        ]
      },
      style () {
        return {
          'float': 'left',
          'display': 'inline-block',
          'padding-left': this.padding + 'px',
          'padding-right': this.padding + 'px',
          'width': this.width + '%',
          'position': 'relative'
        }
      },
      numberClasses () {
        return [
          {'mt-step-number': true},
          {'bg-white': ['background', 'background-thin'].indexOf(this.theme) === -1}
        ]
      }
    }
  }
</script>
