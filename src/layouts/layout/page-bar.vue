<template>
  <!-- BEGIN PAGE BAR -->
  <div class="page-bar">
    <ul class="page-breadcrumb">
      <li v-for='(record, index) in route.matched' :key="index">
        <router-link :to="record.path">
          {{record.meta['title'] === undefined?'首页':record.meta.title}}
        </router-link>
        <i class="fa fa-circle" v-if="index + 1 !== route.matched.length"></i>
      </li>
    </ul>
    <div class="page-toolbar">
      <div class="btn-group pull-right">
        <button type="button" class="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown"> 操作
          <i class="fa fa-angle-down"></i>
        </button>
        <ul class="dropdown-menu pull-right" role="menu">
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
      </div>
    </div>
  </div>
  <!-- END PAGE BAR -->
</template>
<script>
  export default{
    data () {
      return {
        route: null
      }
    },
    watch: {
      $route () {
        this.route = this.$route
      }
    },
    created () {
      this.route = this.$route
    }
  }
</script>
