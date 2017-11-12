<template>
  <!-- BEGIN PAGE BAR -->
  <div class="page-bar">
    <ul class="page-breadcrumb">
      <li>
        <i class="icon-home"></i>
        <router-link :to="'/main/'">
          首页
        </router-link>
        <i class="fa fa-angle-right"></i>
      </li>
      <li v-for='(record, index) in $route.matched' v-if="record.meta['title'] !== undefined" :key="index">
        <i :class="'icon-'+record.meta['icon']"></i>
        <router-link :to="record.path">
          {{record.meta.title}}
        </router-link>
        <i class="fa fa-angle-right" v-if="index + 1 !== $route.matched.length"></i>
      </li>
    </ul>
    <div class="page-toolbar">
      <div class="btn-group pull-right">
        <button type="button" class="btn btn-fit-height grey-salt dropdown-toggle" @click="toolbarShow = !toolbarShow"> Actions
          <i class="fa fa-angle-down"></i>
        </button>
        <transition name="slide-fade">
          <ul class="dropdown-menu pull-right" role="menu" style="display:block" v-show="toolbarShow" v-click-outside="() => toolbarShow = false">
            <li>
              <a href="#">
                <i class="icon-bell"></i> Action</a>
            </li>
            <li>
              <a href="#">
                <i class="icon-shield"></i> Another action</a>
            </li>
            <li>
              <a href="#">
                <i class="icon-user"></i> Something else here</a>
            </li>
            <li class="divider"> </li>
            <li>
              <a href="#">
                <i class="icon-bag"></i> Separated link</a>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
  <!-- END PAGE BAR -->
</template>
<script>
  export default{
    data () {
      return {
        toolbarShow: false
      }
    }
  }
</script>
