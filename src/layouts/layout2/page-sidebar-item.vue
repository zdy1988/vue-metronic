<template>
  <li class="nav-item" v-if="!model.heading">
    <router-link :to="model.path" class="nav-link" :class="{'nav-toggle':isFolder}" v-if="model.path" @click.native="sidebarMenuItemClick">
      <i :class="'icon-' + model.icon"></i>
      <span class="title">{{model.title}}</span>
      <span class="arrow" v-if="isFolder"></span>
    </router-link>
    <a href="javascript:;" class="nav-link" :class="{'nav-toggle':isFolder}" v-else>
      <i :class="'icon-' + model.icon"></i>
      <span class="title">{{model.title}}</span>
      <span class="arrow" v-if="isFolder"></span>
    </a>

    <ul class="sub-menu" v-if="isFolder">
      <page-sidebar-item v-for="model in model.children" :key="model.title" :model="model" :set-active="setActive"></page-sidebar-item>
    </ul>
  </li>
</template>
<script>
  import Layout from './main'

  export default{
    name: 'PageSidebarItem',
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
      sidebarMenuItemClick: function (e) {
        if (this.setActive.call() === true) {
          Layout.setSidebarMenuActiveLink('set', e.target)
        }
      }
    }
  }
</script>
