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
            <div class="menu-toggler sidebar-toggler" @click="sidebarShow = !sidebarShow">
              <span></span>
            </div>
          </div>
          <!-- END LOGO -->
          <!-- BEGIN RESPONSIVE MENU TOGGLER -->
          <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
            <span></span>
          </a>
          <!-- END RESPONSIVE MENU TOGGLER -->
          <!-- BEGIN TOP NAVIGATION MENU -->
          <div class="top-menu">
            <ul class="nav navbar-nav pull-right">
              <!-- BEGIN NOTIFICATION DROPDOWN -->
              <!-- DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte -->
              <!-- DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode -->
              <!-- DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class -->
              <li class="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i class="icon-bell"></i>
                  <span class="badge badge-default"> 7 </span>
                </a>
                <ul class="dropdown-menu">
                  <li class="external">
                    <h3>
                      <span class="bold">12 pending</span> notifications</h3>
                    <a href="page_user_profile_1.html">view all</a>
                  </li>
                  <li>
                    <ul class="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">
                      <li>
                        <a href="javascript:;">
                          <span class="time">just now</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-success">
                                                              <i class="fa fa-plus"></i>
                                                          </span> New user registered. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">3 mins</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-danger">
                                                              <i class="fa fa-bolt"></i>
                                                          </span> Server #12 overloaded. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">10 mins</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-warning">
                                                              <i class="fa fa-bell-o"></i>
                                                          </span> Server #2 not responding. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">14 hrs</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-info">
                                                              <i class="fa fa-bullhorn"></i>
                                                          </span> Application error. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">2 days</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-danger">
                                                              <i class="fa fa-bolt"></i>
                                                          </span> Database overloaded 68%. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">3 days</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-danger">
                                                              <i class="fa fa-bolt"></i>
                                                          </span> A user IP blocked. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">4 days</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-warning">
                                                              <i class="fa fa-bell-o"></i>
                                                          </span> Storage Server #4 not responding dfdfdfd. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">5 days</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-info">
                                                              <i class="fa fa-bullhorn"></i>
                                                          </span> System Error. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="time">9 days</span>
                          <span class="details">
                                                          <span class="label label-sm label-icon label-danger">
                                                              <i class="fa fa-bolt"></i>
                                                          </span> Storage server failed. </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- END NOTIFICATION DROPDOWN -->
              <!-- BEGIN INBOX DROPDOWN -->
              <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
              <li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i class="icon-envelope-open"></i>
                  <span class="badge badge-default"> 4 </span>
                </a>
                <ul class="dropdown-menu">
                  <li class="external">
                    <h3>You have
                      <span class="bold">7 New</span> Messages</h3>
                    <a href="app_inbox.html">view all</a>
                  </li>
                  <li>
                    <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                      <li>
                        <a href="#">
                                                      <span class="photo">
                                                          <img src="../../../static/img/layouts/layout3/avatar2.jpg" class="img-circle" alt=""> </span>
                          <span class="subject">
                                                          <span class="from"> Lisa Wong </span>
                                                          <span class="time">Just Now </span>
                                                      </span>
                          <span class="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                                                      <span class="photo">
                                                          <img src="../../../static/img/layouts/layout3/avatar3.jpg" class="img-circle" alt=""> </span>
                          <span class="subject">
                                                          <span class="from"> Richard Doe </span>
                                                          <span class="time">16 mins </span>
                                                      </span>
                          <span class="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                                                      <span class="photo">
                                                          <img src="../../../static/img/layouts/layout3/avatar1.jpg" class="img-circle" alt=""> </span>
                          <span class="subject">
                                                          <span class="from"> Bob Nilson </span>
                                                          <span class="time">2 hrs </span>
                                                      </span>
                          <span class="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                                                      <span class="photo">
                                                          <img src="../../../static/img/layouts/layout3/avatar2.jpg" class="img-circle" alt=""> </span>
                          <span class="subject">
                                                          <span class="from"> Lisa Wong </span>
                                                          <span class="time">40 mins </span>
                                                      </span>
                          <span class="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                                                      <span class="photo">
                                                          <img src="../../../static/img/layouts/layout3/avatar3.jpg" class="img-circle" alt=""> </span>
                          <span class="subject">
                                                          <span class="from"> Richard Doe </span>
                                                          <span class="time">46 mins </span>
                                                      </span>
                          <span class="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- END INBOX DROPDOWN -->
              <!-- BEGIN TODO DROPDOWN -->
              <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
              <li class="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i class="icon-calendar"></i>
                  <span class="badge badge-default"> 3 </span>
                </a>
                <ul class="dropdown-menu extended tasks">
                  <li class="external">
                    <h3>You have
                      <span class="bold">12 pending</span> tasks</h3>
                    <a href="app_todo.html">view all</a>
                  </li>
                  <li>
                    <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">New release v1.2 </span>
                                                          <span class="percent">30%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 40%;" class="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">40% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">Application deployment</span>
                                                          <span class="percent">65%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 65%;" class="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">65% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">Mobile app release</span>
                                                          <span class="percent">98%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 98%;" class="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">98% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">Database migration</span>
                                                          <span class="percent">10%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 10%;" class="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">10% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">Web server upgrade</span>
                                                          <span class="percent">58%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 58%;" class="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">58% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">Mobile development</span>
                                                          <span class="percent">85%</span>
                                                      </span>
                          <span class="progress">
                                                          <span style="width: 85%;" class="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">85% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                                                      <span class="task">
                                                          <span class="desc">New UI release</span>
                                                          <span class="percent">38%</span>
                                                      </span>
                          <span class="progress progress-striped">
                                                          <span style="width: 38%;" class="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                              <span class="sr-only">38% Complete</span>
                                                          </span>
                                                      </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- END TODO DROPDOWN -->
              <!-- BEGIN USER LOGIN DROPDOWN -->
              <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
              <li class="dropdown dropdown-user">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <img alt="" class="img-circle" src="../../../static/img/layouts/layout/avatar3_small.jpg" />
                  <span class="username username-hide-on-mobile"> Nick </span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-default">
                  <li>
                    <a href="page_user_profile_1.html">
                      <i class="icon-user"></i> My Profile </a>
                  </li>
                  <li>
                    <a href="app_calendar.html">
                      <i class="icon-calendar"></i> My Calendar </a>
                  </li>
                  <li>
                    <a href="app_inbox.html">
                      <i class="icon-envelope-open"></i> My Inbox
                      <span class="badge badge-danger"> 3 </span>
                    </a>
                  </li>
                  <li>
                    <a href="app_todo.html">
                      <i class="icon-rocket"></i> My Tasks
                      <span class="badge badge-success"> 7 </span>
                    </a>
                  </li>
                  <li class="divider"> </li>
                  <li>
                    <a href="page_user_lock_1.html">
                      <i class="icon-lock"></i> Lock Screen </a>
                  </li>
                  <li>
                    <a href="page_user_login_1.html">
                      <i class="icon-key"></i> Log Out </a>
                  </li>
                </ul>
              </li>
              <!-- END USER LOGIN DROPDOWN -->
              <!-- BEGIN QUICK SIDEBAR TOGGLER -->
              <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
              <li class="dropdown dropdown-quick-sidebar-toggler"  @click="quickSidebarShow = !quickSidebarShow">
                <a href="javascript:;" class="dropdown-toggle">
                  <i class="icon-logout"></i>
                </a>
              </li>
              <!-- END QUICK SIDEBAR TOGGLER -->
            </ul>
          </div>
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
          <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
          <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
          <div class="page-sidebar navbar-collapse collapse">
            <page-sidebar-menu :show="sidebarShow" :sidebar-data="sidebarData" :set-active="setSidebarMenuActive"></page-sidebar-menu>
          </div>
          <!-- END SIDEBAR -->
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
          <!-- BEGIN CONTENT BODY -->
          <div class="page-content">
            <!-- BEGIN PAGE HEADER-->
            <!-- BEGIN THEME PANEL -->
            <div class="theme-panel hidden-xs hidden-sm">
              <div class="toggler"> </div>
              <div class="toggler-close"> </div>
              <div class="theme-options">
                <div class="theme-option theme-colors clearfix">
                  <span> THEME COLOR </span>
                  <ul>
                    <li class="color-default current tooltips" data-style="default" data-container="body" data-original-title="Default"> </li>
                    <li class="color-darkblue tooltips" data-style="darkblue" data-container="body" data-original-title="Dark Blue"> </li>
                    <li class="color-blue tooltips" data-style="blue" data-container="body" data-original-title="Blue"> </li>
                    <li class="color-grey tooltips" data-style="grey" data-container="body" data-original-title="Grey"> </li>
                    <li class="color-light tooltips" data-style="light" data-container="body" data-original-title="Light"> </li>
                    <li class="color-light2 tooltips" data-style="light2" data-container="body" data-html="true" data-original-title="Light 2"> </li>
                  </ul>
                </div>
                <div class="theme-option">
                  <span> Theme Style </span>
                  <select class="layout-style-option form-control input-sm">
                    <option value="square" selected="selected">Square corners</option>
                    <option value="rounded">Rounded corners</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Layout </span>
                  <select class="layout-option form-control input-sm">
                    <option value="fluid" selected="selected">Fluid</option>
                    <option value="boxed">Boxed</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Header </span>
                  <select class="page-header-option form-control input-sm">
                    <option value="fixed" selected="selected">Fixed</option>
                    <option value="default">Default</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Top Menu Dropdown</span>
                  <select class="page-header-top-dropdown-style-option form-control input-sm">
                    <option value="light" selected="selected">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Sidebar Mode</span>
                  <select class="sidebar-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">Default</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Sidebar Menu </span>
                  <select class="sidebar-menu-option form-control input-sm">
                    <option value="accordion" selected="selected">Accordion</option>
                    <option value="hover">Hover</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Sidebar Style </span>
                  <select class="sidebar-style-option form-control input-sm">
                    <option value="default" selected="selected">Default</option>
                    <option value="light">Light</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Sidebar Position </span>
                  <select class="sidebar-pos-option form-control input-sm">
                    <option value="left" selected="selected">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div class="theme-option">
                  <span> Footer </span>
                  <select class="page-footer-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">Default</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- END THEME PANEL -->
            <page-bar></page-bar>
            <!-- BEGIN PAGE TITLE-->
            <page-title></page-title>
            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
          <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
        <!-- BEGIN QUICK SIDEBAR -->
        <a href="javascript:;" class="page-quick-sidebar-toggler" @click="quickSidebarShow = !quickSidebarShow">
          <i class="icon-login"></i>
        </a>
        <div class="page-quick-sidebar-wrapper">
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
    <page-loading :show="showLoading"></page-loading>
  </div>
</template>
<script>
  import App from '@/assets/scripts/global/app'
  import Layout from '@/assets/scripts/layout/layout'

  import {Fa, Icon} from '@/components/icon'
  import {QuickNav} from '@/components/nav'
  import {GoTop} from '@/components/element'

  import {routerConfig} from '@/router/'

  import PageLoading from './page-loading'
  import PageSidebarMenu from './page-sidebar-menu'
  import PageBar from './page-bar'
  import PageTitle from './page-title'
  import PageQuickSidebar from './page-quick-sidebar'

  export default{
    data () {
      return {
        logo: require('../../../static/img/layouts/layout/logo.png'),
        showLoading: false,
        sidebarShow: true,
        sidebarData: routerConfig,
        setSidebarMenuActive: () => {
          this.showLoading = true
          setTimeout(() => {
            this.showLoading = false
          }, 500)
          return true
        },
        quickSidebarShow: false
      }
    },
    watch: {
      $route (to, from, savedPosition) {
        // console.log(this.$route)
      }
    },
    computed: {
      classes () {
        return [
          {'page-header-fixed page-sidebar-closed-hide-logo page-content-white': true},
          {'page-sidebar-closed': !this.sidebarShow},
          {'page-quick-sidebar-open': this.quickSidebarShow}
        ]
      }
    },
    mounted () {
      App.init()
      Layout.init()
    },
    components: {
      Fa,
      Icon,
      QuickNav,
      GoTop,
      PageLoading,
      PageSidebarMenu,
      PageBar,
      PageTitle,
      PageQuickSidebar
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active {
    transition-delay: .5s;
  }
</style>
<style lang='sass'>
  @import "../../assets/sass/bootstrap"
  @import "../../assets/sass/global/components"
  @import "../../assets/sass/global/components/_reset-rounds"
  @import "../../assets/sass/layouts/layout/layout"
  @import "../../assets/sass/layouts/layout/themes/darkblue"
</style>
