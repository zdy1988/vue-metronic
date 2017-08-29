<template>
  <div :class="tabClasses">
    <div :class="navPosition" style="z-index: 1;" v-show="position !== 'bottom'">
      <ul :class="navClasses">
        <li :class="{active:tabPane.active}" v-for="(tabPane, index) in tabPanes" :key="index" v-if="limit > index">
          <a href="javscript:;" @click="setActive(tabPane)">
            <i :class="'fa fa-' + tabPane.icon" v-if="tabPane.icon"></i> {{tabPane.name}}
          </a>
        </li>
        <li class="dropdown" :class="{active: limit <= tabIndex}" @click="dropdownShow = !dropdownShow" v-click-outside="() => dropdownShow = false" v-if="limit > 0 && limit < tabPanes.length">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> 更多
            <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu pull-right" style="display:block" v-show="dropdownShow">
            <li v-for="(tabPane, index) in tabPanes" :key="index" v-if="limit <= index">
              <a href="javscript:;" @click="setActive(tabPane)">
                <i :class="'fa fa-' + tabPane.icon" v-if="tabPane.icon"></i> {{tabPane.name}}
              </a>
            </li>
          </ul>
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
        <li :class="{active:tabPane.active}" v-for="(tabPane, index) in tabPanes" :key="index" v-if="limit > index">
          <a href="javscript:;" @click="setActive(tabPane)">
            <i :class="'fa fa-' + tabPane.icon" v-if="tabPane.icon"></i> {{tabPane.name}}
          </a>
        </li>
        <li class="dropdown" :class="{active: limit <= tabIndex}" v-if="limit > 0 && limit < tabPanes.length">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> 更多
            <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu pull-right" style="display:block">
            <li v-for="(tabPane, index) in tabPanes" :key="index" v-if="limit <= index">
              <a href="javscript:;" @click="setActive(tabPane)">
                <i :class="'fa fa-' + tabPane.icon" v-if="tabPane.icon"></i> {{tabPane.name}}
              </a>
            </li>
          </ul>
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
        tabPanes: [],
        tabIndex: 0,
        dropdownShow: false
      }
    },
    props: {
      mode: {type: String, default: 'default', validator: value => ['default', 'pills', 'line', 'custom'].indexOf(value) > -1},
      position: {type: String, default: 'top', validator: value => ['top', 'left', 'right', 'bottom'].indexOf(value) > -1},
      reversed: {type: Boolean, default: false},
      justified: {type: Boolean, default: false},
      activeIndex: {type: Number, default: 0},
      limit: {type: Number, default: 1000},
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
      this.updateTabs()
    },
    methods: {
      updateTabs () {
        this.tabPanes.length = 0
        for (let child of this.$children) {
          if (child.$options._componentTag === 'tab-pane') {
            this.tabPanes.push(child)
          }
        }
        this.setActiveIndex(this.activeIndex)
      },
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
            self.tabIndex = i
            self.$emit('update:activeIndex', i)
          } else {
            pane.active = false
          }
        }
      }
    }
  }
</script>
