<template>
  <div>
    <nav class="quick-nav" :class="{'nav-is-visible':visible}">
      <a class="quick-nav-trigger" href="javascript:;" @click="_toggle" style="z-index: 10104;"  v-click-outside="_close">
        <span aria-hidden="true"></span>
      </a>
      <ul>
        <li>
          <a href="https://stateforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenstates" target="_blank" class="active">
            <span>Purchase Metronic</span>
            <i class="icon-basket"></i>
          </a>
        </li>
        <li>
          <a href="https://stateforest.net/item/metronic-responsive-admin-dashboard-template/reviews/4021469?ref=keenstates" target="_blank">
            <span>Customer Reviews</span>
            <i class="icon-users"></i>
          </a>
        </li>
        <li>
          <a href="http://keenstates.com/showcast/" target="_blank">
            <span>Showcase</span>
            <i class="icon-user"></i>
          </a>
        </li>
        <li>
          <a href="http://keenstates.com/metronic-state/changelog/" target="_blank">
            <span>Changelog</span>
            <i class="icon-graph"></i>
          </a>
        </li>
      </ul>
      <span aria-hidden="true" class="quick-nav-bg"></span>
    </nav>
    <masker :show="visible" color="black" :opacity="0.8"></masker>
  </div>
</template>
<script>
  import Masker from '@/components/element/masker'

  export default {
    name: 'QuickNav',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      _toggle () {
        this.visible = !this.visible
      },
      _close () {
        this.visible = false
      }
    },
    components: {
      Masker
    }
  }
</script>
