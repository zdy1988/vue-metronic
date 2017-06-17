<template>
  <animated-fade-in>
    <div class="tab-pane" :class="{active:active}" v-show="active" ref="tabPanel">
      <slot></slot>
    </div>
  </animated-fade-in>
</template>
<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    props: {
      name: { type: String, default: 'Section' },
      cur: { type: Boolean, default: false }
    },
    created () {
      if (this.cur) {
        this.active = this.cur
      }
    }
  }
</script>
