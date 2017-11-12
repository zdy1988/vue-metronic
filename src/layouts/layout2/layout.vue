<template>
  <div :class="classes">
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
      <!-- BEGIN HEADER INNER -->
      <div class="page-header-inner container">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
          <a href="index.html">
            <img :src="logo" alt="logo" class="logo-default" />
          </a>
          <div class="menu-toggler sidebar-toggler">
            <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
          </div>
        </div>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN PAGE ACTIONS -->
        <!-- DOC: Remove "hide" class to enable the page header actions -->
        <div class="page-actions">
          <div class="btn-group">
            <button type="button" class="btn btn-circle btn-outline red dropdown-toggle" @click="isPageActionsShow = !isPageActionsShow">
              <i class="fa fa-plus"></i>&nbsp;
              <span class="hidden-sm hidden-xs">New&nbsp;</span>&nbsp;
              <i class="fa fa-angle-down"></i>
            </button>
            <transition name="slide-fade">
              <ul class="dropdown-menu" role="menu" style="display:block" v-show="isPageActionsShow" v-click-outside="() => isPageActionsShow = false">
                <li>
                  <a href="javascript:;">
                    <i class="icon-docs"></i> New Post </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icon-tag"></i> New Comment </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icon-share"></i> Share </a>
                </li>
                <li class="divider"> </li>
                <li>
                  <a href="javascript:;">
                    <i class="icon-flag"></i> Comments
                    <span class="badge badge-success">4</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i class="icon-users"></i> Feedbacks
                    <span class="badge badge-danger">2</span>
                  </a>
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <!-- END PAGE ACTIONS -->
        <!-- BEGIN PAGE TOP -->
        <div class="page-top">
          <!-- BEGIN HEADER SEARCH BOX -->
          <!-- DOC: Apply "search-form-expanded" right after the "search-form" class to have half expanded search box -->
          <form class="search-form search-form-expanded" action="" method="GET">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search..." name="query">
              <span class="input-group-btn">
                  <a href="javascript:;" class="btn submit">
                      <i class="icon-magnifier"></i>
                  </a>
              </span>
            </div>
          </form>
          <!-- END HEADER SEARCH BOX -->
          <!-- BEGIN TOP NAVIGATION MENU -->
          <page-top-menu>
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-quick-sidebar-toggler"  @click="isQuickSidebarShow = !isQuickSidebarShow">
              <a href="javascript:;" class="dropdown-toggle">
                <i class="icon-logout"></i>
              </a>
            </li>
            <!-- END QUICK SIDEBAR TOGGLER -->
          </page-top-menu>
          <!-- END TOP NAVIGATION MENU -->
        </div>
        <!-- END PAGE TOP -->
      </div>
      <!-- END HEADER INNER -->
    </div>
    <!-- END HEADER -->
    <!-- BEGIN HEADER & CONTENT DIVIDER -->
    <div class="clearfix"> </div>
    <!-- END HEADER & CONTENT DIVIDER -->
    <div class="container">
      <!-- BEGIN CONTAINER -->
      <div class="page-container">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">
          <!-- END SIDEBAR -->
          <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
          <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
          <page-sidebar-menu :sidebar-data="sidebarData" :set-active="setSidebarMenuActive"></page-sidebar-menu>
          <!-- END SIDEBAR -->
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
          <!-- BEGIN CONTENT BODY -->
          <div class="page-content">
            <!-- BEGIN PAGE HEADER-->
            <!-- BEGIN THEME PANEL -->
            <!--
              <theme-panel></theme-panel>
            -->
            <!-- END THEME PANEL -->
            <page-title></page-title>
            <page-bar></page-bar>
            <!-- END PAGE HEADER-->
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
          <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
        <!-- BEGIN QUICK SIDEBAR -->
        <a href="javascript:;" class="page-quick-sidebar-toggler" @click="isQuickSidebarShow = false">
          <i class="icon-login"></i>
        </a>
        <div class="page-quick-sidebar-wrapper" v-click-outside="() => isQuickSidebarShow = false">
          <page-quick-sidebar></page-quick-sidebar>
        </div>
        <!-- END QUICK SIDEBAR -->
      </div>
      <!-- END CONTAINER -->
      <!-- BEGIN FOOTER -->
      <div class="page-footer">
        <div class="page-footer-inner"> 2016 &copy; Metronic Theme By
          <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
          <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
          <go-top></go-top>
        </div>
        <!-- END FOOTER -->
      </div>
      <!-- BEGIN QUICK NAV -->
      <quick-nav v-show="isQuickSidebarShow === false"></quick-nav>
      <!-- END QUICK NAV -->
      <page-loading :show="isPageLoading"></page-loading>
    </div>
  </div>
</template>
<script>
  import Layout from './main'
  import router from '../../router'
  import {routerConfig} from '@/router/'

  import PageLoading from '../page-loading'
  import PageSidebarMenu from './page-sidebar-menu'
  import PageBar from './page-bar'
  import PageTitle from './page-title'
  import PageQuickSidebar from './page-quick-sidebar'
  import PageTopMenu from './page-top-menu'
  import GoTop from '../go-top'
  import QuickNav from '../quick-nav'

  export default{
    data () {
      return {
        logo: require('../../../static/img/layouts/layout2/logo-default.png'),
        isPageLoading: false,
        sidebarData: routerConfig,
        setSidebarMenuActive: () => true,
        isQuickSidebarShow: false,
        isPageActionsShow: false
      }
    },
    computed: {
      classes () {
        return [
          {'page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-boxed': true},
          {'page-quick-sidebar-open': this.isQuickSidebarShow}
        ]
      },
      chatMessages () {
        var self = this
        return this.messages.map(msg => {
          for (let user of self.users) {
            if (user.id === msg.sender) {
              msg.senderInfo = user
            }
            if (user.id === msg.receiver) {
              msg.receiverInfo = user
            }
          }
          return msg
        })
      }
    },
    methods: {
      chatMessagePost (msg) {
        this.messages.push(msg)
      }
    },
    mounted () {
      Layout.init()
      this.$store.dispatch('permission/checkLogin').done(() => {
        this.$store.dispatch('app/initUsers').done(() => {
          this.$store.dispatch('app/initMessages')
          this.$store.dispatch('app/initTasks')
          this.$store.dispatch('app/initAlerts')
        })
      }).fail(() => {
        router.push('/')
      })
    },
    components: {
      PageLoading,
      PageSidebarMenu,
      PageBar,
      PageTitle,
      PageQuickSidebar,
      PageTopMenu,
      QuickNav,
      GoTop
    }
  }
</script>
<style lang='sass'>
  @import "../../assets/sass/style"
  @import "../../assets/sass/layouts/layout2/layout"
  @import "../../assets/sass/layouts/layout2/themes/grey"
</style>
