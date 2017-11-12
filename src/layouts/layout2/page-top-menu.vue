<template>
  <div class="top-menu">
    <ul class="nav navbar-nav pull-right">
      <!-- BEGIN NOTIFICATION DROPDOWN -->
      <!-- DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte -->
      <!-- DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode -->
      <!-- DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class -->
      <li class="dropdown dropdown-extended dropdown-notification" @click="notificationShow = !notificationShow" v-click-outside="() => notificationShow = false">
        <a href="javascript:;" class="dropdown-toggle">
          <i class="icon-bell"></i>
          <span class="badge badge-default"> {{alerts.length}} </span>
        </a>
        <transition name="slide-fade">
          <ul class="dropdown-menu" style="display:block" v-show="notificationShow">
            <li class="external">
              <h3>您有 <span class="font-red">{{alerts.length}}</span> 个待处理提醒</h3>
              <a href="javascript:;">显示全部</a>
            </li>
            <li>
              <ul class="dropdown-menu-list" v-slimscroll="275">
                <li v-for="(alert, index) in alerts">
                  <a href="javascript:;">
                    <span class="time">{{handleGetDateDiff(alert.time)}}</span>
                    <span class="details">
                      <span class="label label-sm label-icon" :class="'label-' + alert.status">
                          <i class="fa" :class="'fa-' + alert.icon"></i>
                      </span>
                      <span>
                        {{alert.desc}}
                      </span>
                  </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
      <!-- END NOTIFICATION DROPDOWN -->
      <!-- BEGIN INBOX DROPDOWN -->
      <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
      <li class="dropdown dropdown-extended dropdown-inbox" @click="inboxShow = !inboxShow" v-click-outside="() => inboxShow = false">
        <a href="javascript:;" class="dropdown-toggle">
          <i class="icon-envelope-open"></i>
          <span class="badge badge-default"> {{messages.length}} </span>
        </a>
        <transition name="slide-fade">
          <ul class="dropdown-menu" style="display:block" v-show="inboxShow">
            <li class="external">
              <h3>您有 <span class="font-red">{{messages.length}}</span> 条新消息</h3>
              <a href="javascript:;">显示全部</a>
            </li>
            <li>
              <ul class="dropdown-menu-list" v-slimscroll="275">
                <li v-for="(msg, index) in messages" :key="index">
                  <a href="javascript:;">
                  <span class="photo">
                      <img :src="msg.sender.avatar" class="img-circle" alt="">
                  </span>
                    <span class="subject">
                      <span class="from"> {{msg.sender.name}} </span>
                      <span class="time"> {{msg.datetime}} </span>
                  </span>
                    <span class="message"> {{msg.content}} </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
      <!-- END INBOX DROPDOWN -->
      <!-- BEGIN TODO DROPDOWN -->
      <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
      <li class="dropdown dropdown-extended dropdown-tasks" @click="tasksShow = !tasksShow" v-click-outside="() => tasksShow = false">
        <a href="javascript:;" class="dropdown-toggle">
          <i class="icon-calendar"></i>
          <span class="badge badge-default"> {{tasks.length}} </span>
        </a>
        <transition name="slide-fade">
          <ul class="dropdown-menu extended tasks" style="display:block" v-show="tasksShow">
            <li class="external">
              <h3>您有 <span class="font-red">{{tasks.length}}</span> 个未完成任务</h3>
              <a href="javascript:;">显示全部</a>
            </li>
            <li>
              <ul class="dropdown-menu-list" v-slimscroll="275">
                <li v-for="(task, index) in tasks">
                  <a href="javascript:;">
                  <span class="task">
                    <span class="desc">{{task.name}}</span>
                    <span class="percent">{{task.progress}}%</span>
                  </span>
                    <span class="progress">
                      <span :style="{width: task.progress + '%'}" class="progress-bar" :class="'progress-bar-' + task.state"></span>
                  </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
      <!-- END TODO DROPDOWN -->
      <!-- BEGIN USER LOGIN DROPDOWN -->
      <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
      <li class="dropdown dropdown-user" @click="userShow = !userShow" v-click-outside="() => userShow = false">
        <a href="javascript:;" class="dropdown-toggle">
          <img alt="" class="img-circle" :src="user.avatar" />
          <span class="username username-hide-on-mobile"> {{user.name}} </span>
          <i class="fa fa-angle-down"></i>
        </a>
        <transition name="slide-fade">
          <ul class="dropdown-menu dropdown-menu-default" style="display:block" v-show="userShow">
            <li>
              <a href="javascript:;">
                <i class="icon-user"></i> 个人信息 </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="icon-calendar"></i> 日程安排 </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="icon-envelope-open"></i> 我的信箱
                <span class="badge badge-danger"> 3 </span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="icon-rocket"></i> 我的任务
                <span class="badge badge-success"> 7 </span>
              </a>
            </li>
            <li class="divider"> </li>
            <li>
              <router-link to="/lock">
                <icon name="lock"></icon> 锁定屏幕
              </router-link>
            </li>
            <li>
              <router-link to="/login">
                <icon name="key"></icon> 退出系统
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
      <!-- END USER LOGIN DROPDOWN -->
      <!-- BEGIN QUICK SIDEBAR TOGGLER -->
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import {common} from '@/untils'

  export default{
    computed: {
      ...mapState({
        user: state => state.permission.user
      }),
      ...mapState({
        alerts: state => state.app.alerts,
        msgs: state => state.app.messages,
        tasks: state => state.app.tasks
      }),
      messages () {
        return this.msgs.filter(msg => msg.receiverId === this.user.id && msg.read === false)
      }
    },
    data () {
      return {
        notificationShow: false,
        inboxShow: false,
        tasksShow: false,
        userShow: false
      }
    },
    methods: {
      handleGetDateDiff (date) {
        const dateStr = String(date)
        return common.getDateDiff(dateStr)
      }
    }
  }
</script>
