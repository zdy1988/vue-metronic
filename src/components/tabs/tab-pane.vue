<template>
  <fade>
    <div class="tab-pane" :class="{active:active}" v-show="active" ref="tabPanel">
      <slot></slot>
    </div>
  </fade>
</template>
<script>
  import Fade from '@/components/animate/fade'

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
    },
    components: {
      Fade
    }
  }
</script>
