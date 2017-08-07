<template>
  <!-- BEGIN SIDEBAR MENU -->
  <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
  <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
  <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
  <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
  <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
  <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
  <ul :class="classes" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
    <page-sidebar-search></page-sidebar-search>

    <page-sidebar-item v-for="(sidebarItem, index) in sidebarData"
                       :key="sidebarItem.title"
                       :model="sidebarItem"
                       :class="{'start active': index===0}"
                       :set-active="setActive"
    ></page-sidebar-item>
  </ul>
  <!-- END SIDEBAR MENU -->
</template>

<script>
  import Vue from 'vue'
  import Layout from '@/assets/scripts/layout/layout'

  Vue.component('page-sidebar-item', {
    template: `<li class="heading" v-if="model.heading">
                   <h3 class="uppercase">{{model.title}}</h3>
               </li>
               <li class="nav-item" v-else>
                  <router-link :to="model.path" class="nav-link" :class="{'nav-toggle':isFolder}" v-if="model.path" @click.native="sidebarItemClick">
                     <i class="icon-folder"></i>
                     <span class="title">{{model.title}}</span>
                     <span class="arrow" v-if="isFolder"></span>
                  </router-link>
                  <a href="javascript:;" class="nav-link" :class="{'nav-toggle':isFolder}" v-else>
                    <i class="icon-folder"></i>
                    <span class="title">{{model.title}}</span>
                    <span class="arrow" v-if="isFolder"></span>
                  </a>

                  <ul class="sub-menu" v-if="isFolder">
                    <page-sidebar-item v-for="model in model.children" :key="model.title" :model="model" :set-active="setActive"></page-sidebar-item>
                  </ul>
               </li>`,
    props: {
      model: {type: Object},
      setActive: {type: Function}
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      sidebarItemClick: function (e) {
        if (this.setActive.call() === true) {
          Layout.setSidebarMenuActiveLink('set', e.target)
        }
      }
    }
  })

  Vue.component('page-sidebar-search', {
    template: `<li class="sidebar-search-wrapper">
                  <div class="sidebar-search" :class="classes">
                    <a href="javascript:;" class="remove">
                      <i class="icon-close"></i>
                    </a>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                        <a href="javascript:;" class="btn submit">
                          <i class="icon-magnifier"></i>
                        </a>
                      </span>
                    </div>
                  </div>
               </li>`,
    props: {
      theme: {type: String, validator: value => ['bordered', 'solid'].indexOf(value) > -1}
    },
    computed: {
      classes () {
        return [
          {'sidebar-search-bordered': !!this.theme},
          {'sidebar-search-solid': !!this.theme && this.theme === 'solid'}
        ]
      }
    }
  })

  export default{
    props: {
      show: {type: Boolean, default: true},
      sidebarData: {type: Array, required: true},
      setActive: {
        type: Function,
        default: () => {
          return true
        }
      }
    },
    computed: {
      classes () {
        return [
          {'page-sidebar-menu  page-header-fixed': true},
          {'page-sidebar-menu-closed': !this.show}
        ]
      }
    }
  }
</script>
