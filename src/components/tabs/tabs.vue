<template>
  <div :class="tabClasses">
    <div :class="navPosition" style="z-index: 1;" v-show="position !== 'bottom'">
      <ul :class="navClasses">
        <li :class="{active:tabPane.active}" v-for="tabPane in tabPanes">
          <a href="javscript:;" @click="setActive(tabPane)">
            {{tabPane.name}}
          </a>
        </li>
      </ul>
    </div>
    <div :class="panePosition">
      <div :class="paneClasses">
        <slot></slot>
      </div>
    </div>
    <div :class="navPosition" style="z-index: 1;" v-show="position === 'bottom'">
      <ul :class="navClasses">
        <li :class="{active:tabPane.active}" v-for="tabPane in tabPanes">
          <a href="javscript:;" @click="setActive(tabPane)">{{tabPane.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Tabs',
    data () {
      return {
        tabPanes: []
      }
    },
    props: {
      mode: {type: String, default: 'default', validator: value => ['default', 'pills', 'line', 'custom'].indexOf(value) > -1},
      position: {type: String, default: 'top', validator: value => ['top', 'left', 'right', 'bottom'].indexOf(value) > -1},
      reversed: {type: Boolean, default: false},
      justified: {type: Boolean, default: false},
      activeIndex: {type: Number, default: 0},
      klass: {type: String}
    },
    computed: {
      tabClasses () {
        return [
          {'row': true},
          {[`tabbable-${this.mode}`]: !!this.mode},
          {'nav-justified': !!this.justified && !!this.position !== 'left' && !!this.position !== 'right'},
          {[this.klass]: !!this.klass}
        ]
      },
      navClasses () {
        return [
          {'nav': true},
          {'nav-tabs': true},
          {'nav-pills': !!this.mode && this.mode === 'pills'},
          {'tabs-reversed': !!this.reversed && !!this.position !== 'left' && !!this.position !== 'right'},
          {'nav-justified': !!this.justified && !!this.position !== 'left' && !!this.position !== 'right'},
          {[`tabs-${this.position}`]: !!this.position}
        ]
      },
      paneClasses () {
        return [
          {'tab-content': true},
          {[`tabs-${this.position}`]: !!this.position}
        ]
      },
      navPosition () {
        return [
          {'float-left': !!this.position && this.position === 'left'},
          {'float-right': !!this.position && this.position === 'right'},
          {'col-md-12 col-sm-12 col-xs-12': !!this.position && (this.position === 'top' || this.position === 'bottom')},
          {'col-md-3 col-sm-3 col-xs-3': !!this.position && (this.position === 'left' || this.position === 'right')}
        ]
      },
      panePosition () {
        return [
          {'col-md-12 col-sm-12 col-xs-12': !!this.position && (this.position === 'top' || this.position === 'bottom')},
          {'col-md-9 col-sm-9 col-xs-9': !!this.position && (this.position === 'left' || this.position === 'right')}
        ]
      }
    },
    watch: {
      activeIndex (newValue) {
        this.setActiveIndex(newValue)
      }
    },
    mounted () {
      for (let child of this.$children) {
        if (child.$options._componentTag === 'tab-pane') {
          this.tabPanes.push(child)
        }
      }
      this.setActiveIndex(this.activeIndex)
    },
    methods: {
      setActiveIndex (index) {
        var pane = this.tabPanes[index]
        if (pane) {
          this.setActive(pane)
        }
      },
      setActive (tabPane) {
        var self = this
        for (let i = 0; i < this.tabPanes.length; i++) {
          var pane = this.tabPanes[i]
          if (tabPane === pane) {
            pane.active = true
            self.$emit('update:activeIndex', i)
          } else {
            pane.active = false
          }
        }
      }
    }
  }
</script>
