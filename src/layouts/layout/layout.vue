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
          <a href="javascript:;" class="menu-toggler responsive-toggler" @click="sidebarShow = !sidebarShow">
            <span></span>
          </a>
          <!-- END RESPONSIVE MENU TOGGLER -->
          <!-- BEGIN TOP NAVIGATION MENU -->
          <page-top-menu :alerts="alerts" :messages="unReadChatMessages" :tasks="tasks">
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-quick-sidebar-toggler"  @click="quickSidebarShow = !quickSidebarShow">
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
          <page-sidebar-menu :show="sidebarShow" :sidebar-data="sidebarData" :set-active="setSidebarMenuActive"></page-sidebar-menu>
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
        <a href="javascript:;" class="page-quick-sidebar-toggler" @click="quickSidebarShow = !quickSidebarShow">
          <i class="icon-login"></i>
        </a>
        <div class="page-quick-sidebar-wrapper">
          <page-quick-sidebar :alerts="alerts" :users="users" :messages="chatMessages" :tasks="tasks" :active-user="activeUser" @chat-post="chatMessagePost"></page-quick-sidebar>
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
  import PageTopMenu from './page-top-menu'
  import ThemePanel from '../theme-panel'

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
        quickSidebarShow: false,
        activeUser: 1,
        alerts: [
          {
            icon: 'check',
            status: 'info',
            desc: '您有4个未处理任务。',
            time: '2016/1/20 19:59:30',
            type: 1
          },
          {
            icon: 'bar-chart-o',
            status: 'success',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 1:22:22',
            type: 1
          },
          {
            icon: 'user',
            status: 'danger',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 6:22:22',
            type: 1
          },
          {
            icon: 'shopping-cart',
            status: 'info',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 11:22:22',
            type: 1
          },
          {
            icon: 'check',
            status: 'info',
            desc: '您有4个未处理任务。',
            time: '2016/1/20 19:59:30',
            type: 2
          },
          {
            icon: 'bar-chart-o',
            status: 'success',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 1:22:22',
            type: 2
          },
          {
            icon: 'user',
            status: 'danger',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 6:22:22',
            type: 2
          },
          {
            icon: 'shopping-cart',
            status: 'info',
            desc: '您有4个未处理任务。',
            time: '2017/8/7 11:22:22',
            type: 2
          }
        ],
        users: [
          {
            id: 1,
            name: '小张',
            post: 'CEO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
            role: 1
          },
          {
            id: 2,
            name: '小王',
            post: 'CTO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
            role: 1
          },
          {
            id: 3,
            name: '小李',
            post: 'CFO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
            role: 1
          },
          {
            id: 4,
            name: '小戴',
            post: '项目经理',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
            role: 1
          },
          {
            id: 5,
            name: '小张',
            post: 'CEO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
            role: 2
          },
          {
            id: 6,
            name: '小王',
            post: 'CTO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
            role: 2
          },
          {
            id: 7,
            name: '小李',
            post: 'CFO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
            role: 2
          },
          {
            id: 8,
            name: '小戴',
            post: '项目经理',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
            role: 2
          },
          {
            id: 9,
            name: '小张',
            post: 'CEO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg',
            role: 2
          },
          {
            id: 10,
            name: '小王',
            post: 'CTO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg',
            role: 2
          },
          {
            id: 11,
            name: '小李',
            post: 'CFO',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg',
            role: 2
          },
          {
            id: 12,
            name: '小戴',
            post: '项目经理',
            handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg',
            role: 2
          }
        ],
        messages: [
          {sender: 1, receiver: 2, datetime: '2017/08/07 20:15', content: '你好！', read: false},
          {sender: 2, receiver: 1, datetime: '2017/08/07 20:20', content: '你好！', read: false},
          {sender: 2, receiver: 3, datetime: '2017/08/07 20:21', content: '你好！', read: false},
          {sender: 3, receiver: 1, datetime: '2017/08/07 20:22', content: '你好！', read: false},
          {sender: 2, receiver: 1, datetime: '2017/08/07 20:23', content: '你好！', read: false},
          {sender: 4, receiver: 1, datetime: '2017/08/07 20:24', content: '你好！', read: false},
          {sender: 2, receiver: 4, datetime: '2017/08/07 20:25', content: '你好！', read: false},
          {sender: 5, receiver: 6, datetime: '2017/08/07 20:26', content: '你好！', read: false},
          {sender: 2, receiver: 1, datetime: '2017/08/07 20:27', content: '你好！', read: false},
          {sender: 3, receiver: 7, datetime: '2017/08/07 20:28', content: '你好！', read: false},
          {sender: 2, receiver: 8, datetime: '2017/08/07 20:29', content: '你好！', read: false},
          {sender: 3, receiver: 8, datetime: '2017/08/07 20:30', content: '你好！', read: false}
        ],
        tasks: [
          {
            id: App.getUniqueID('task'),
            name: '任务一',
            state: 'danger',
            progress: 40
          },
          {
            id: App.getUniqueID('task'),
            name: '任务二',
            state: 'success',
            progress: 62
          },
          {
            id: App.getUniqueID('task'),
            name: '任务三',
            state: 'info',
            progress: 35.5
          },
          {
            id: App.getUniqueID('task'),
            name: '任务四',
            state: 'success',
            progress: 80
          },
          {
            id: App.getUniqueID('task'),
            name: '任务五',
            state: 'warning',
            progress: 64
          }
        ]
      }
    },
    computed: {
      classes () {
        return [
          {'page-header-fixed page-sidebar-closed-hide-logo page-content-white': true},
          {'page-sidebar-closed': !this.sidebarShow},
          {'page-quick-sidebar-open': this.quickSidebarShow}
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
      },
      unReadChatMessages () {
        var self = this
        return this.chatMessages.map(msg => {
          if (msg.receiver === self.activeUser && msg.read === false) {
            return msg
          }
        }).filter(msg => msg !== undefined)
      }
    },
    methods: {
      chatMessagePost (msg) {
        this.messages.push(msg)
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
      PageQuickSidebar,
      PageTopMenu,
      ThemePanel
    }
  }
</script>
<style lang='sass'>
  @import "../../assets/sass/style"
  @import "../../assets/sass/layouts/layout/layout"
  @import "../../assets/sass/layouts/layout/themes/darkblue"
</style>
