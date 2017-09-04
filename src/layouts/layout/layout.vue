<template>
  <div :class="classes">
    <div class="page-wrapper">
      <!-- BEGIN HEADER -->
      <div class="page-header navbar navbar-fixed-top">
        <!-- BEGIN HEADER INNER -->
        <div class="page-header-inner ">
          <!-- BEGIN LOGO -->
          <div class="page-logo">
            <a href="index.html">
              <img :src="logo" alt="logo" class="logo-default" /> </a>
            <div class="menu-toggler sidebar-toggler" @click="isShowSidebar = !isShowSidebar">
              <span></span>
            </div>
          </div>
          <!-- END LOGO -->
          <!-- BEGIN RESPONSIVE MENU TOGGLER -->
          <a href="javascript:;" class="menu-toggler responsive-toggler" @click="isShowSidebar = !isShowSidebar">
            <span></span>
          </a>
          <!-- END RESPONSIVE MENU TOGGLER -->
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
        <!-- END HEADER INNER -->
      </div>
      <!-- END HEADER -->
      <!-- BEGIN HEADER & CONTENT DIVIDER -->
      <div class="clearfix"> </div>
      <!-- END HEADER & CONTENT DIVIDER -->
      <!-- BEGIN CONTAINER -->
      <div class="page-container">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar-wrapper">
          <!-- BEGIN SIDEBAR -->
          <page-sidebar-menu :show="isShowSidebar" :sidebar-data="sidebarData" :set-active="setSidebarMenuActive"></page-sidebar-menu>
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
            <page-bar></page-bar>
            <!-- BEGIN PAGE TITLE-->
            <page-title></page-title>
            <!-- END PAGE TITLE-->
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
        </div>
        <go-top></go-top>
      </div>
      <!-- END FOOTER -->
    </div>
    <quick-nav></quick-nav>
    <page-loading :show="isPageLoading"></page-loading>
  </div>
</template>
<script>
  import * as Layout from './main'

  import {Fa, Icon} from '@/components/icon'

  import {routerConfig} from '@/router/'

  import PageLoading from '../page-loading'
  import PageSidebarMenu from './page-sidebar-menu'
  import PageBar from './page-bar'
  import PageTitle from './page-title'
  import PageQuickSidebar from './page-quick-sidebar'
  import PageTopMenu from './page-top-menu'
  import ThemePanel from '../theme-panel'
  import GoTop from '../go-top'
  import QuickNav from '../quick-nav'

  export default{
    data () {
      return {
        logo: require('../../../static/img/layouts/layout/logo.png'),
        isPageLoading: false,
        isShowSidebar: true,
        sidebarData: routerConfig,
        setSidebarMenuActive: () => {
          this.showLoading = true
          setTimeout(() => {
            this.showLoading = false
          }, 500)
          return true
        },
        isQuickSidebarShow: false
      }
    },
    computed: {
      classes () {
        return [
          {'page-header-fixed page-sidebar-closed-hide-logo page-content-white': true},
          {'page-sidebar-closed': !this.isShowSidebar},
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
      this.$store.dispatch('app/initUsers').done(() => {
        this.$store.dispatch('app/initMessages')
        this.$store.dispatch('app/initTasks')
        this.$store.dispatch('app/initAlerts')
      })
    },
    components: {
      Fa,
      Icon,
      PageLoading,
      PageSidebarMenu,
      PageBar,
      PageTitle,
      PageQuickSidebar,
      PageTopMenu,
      QuickNav,
      GoTop,
      ThemePanel
    }
  }
</script>
<style lang='sass'>
  @import "../../assets/sass/style"
  @import "../../assets/sass/layouts/layout/layout"
  @import "../../assets/sass/layouts/layout/themes/darkblue"
</style>
