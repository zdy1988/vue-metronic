<template>
  <div class="page-quick-sidebar">
    <tabs :limit="2" :active-index.sync="tabIndex">
      <tab-pane name="联系人" class="page-quick-sidebar-chat" :class="{'page-quick-sidebar-content-item-shown': chatShow}" cur>
        <div class="page-quick-sidebar-list">
          <div class="page-quick-sidebar-chat-users" v-slimscroll="handleGetChatUsersHeight()">
            <h3 class="list-heading" v-if="staffs.length > 0">工作人员</h3>
            <ul class="media-list list-items" v-if="staffs.length > 0">
              <li class="media" v-for="(member, index) in staffs" :key="index" @click="handleChartMessageVisible(member)">
                <div class="media-status" v-if="handleGetUnReadMessages(member.id).length > 0">
                  <badge theme="success">{{handleGetUnReadMessages(member.id).length}}</badge>
                </div>
                <img class="media-object" :src="member.handPic" :alt="member.name">
                <div class="media-body">
                  <h4 class="media-heading"> {{member.name}} </h4>
                  <div class="media-heading-sub"> {{member.post}} </div>
                </div>
              </li>
            </ul>
            <h3 class="list-heading" v-if="customers.length > 0">目标客户</h3>
            <ul class="media-list list-items" v-if="customers.length > 0">
              <li class="media" v-for="(member, index) in customers" :key="index" @click="handleChartMessageVisible(member)">
                <div class="media-status" v-if="handleGetUnReadMessages(member.id).length > 0">
                  <badge theme="success">{{handleGetUnReadMessages(member.id).length}}</badge>
                </div>
                <img class="media-object" :src="member.handPic" :alt="member.name">
                <div class="media-body">
                  <h4 class="media-heading"> {{member.name}} </h4>
                  <div class="media-heading-sub"> {{member.post}} </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-quick-sidebar-item">
          <div class="page-quick-sidebar-chat-user">
            <div class="page-quick-sidebar-nav">
              <a href="javascript:;" class="page-quick-sidebar-back-to-list" @click="chatShow = false">
                <i class="icon-arrow-left"></i> 返回</a>
            </div>
            <div class="page-quick-sidebar-chat-user-messages" v-slimscroll="handleGetChatMessagesHeight()">
              <div class="post"
                   :class="{out:activeUser === msg.sender, in: activeReceiver === msg.sender}"
                   v-for="(msg, index) in activeMessages" :key="index">
                <img class="avatar" alt="" :src="msg.senderInfo.handPic" />
                <div class="message">
                  <span class="arrow"></span>
                  <a href="javascript:;" class="name">{{msg.senderInfo.name}}</a>
                  <span class="datetime">{{msg.datetime}}</span>
                  <span class="body"> {{msg.content}} </span>
                </div>
              </div>
            </div>
            <div class="page-quick-sidebar-chat-user-form">
              <div class="input-group">
                <input type="text" class="form-control" v-model="message" placeholder="请在这里输入发送消息..." @keyup.13="handleChatMessagePost">
                <div class="input-group-btn">
                  <button type="button" class="btn green" @click="handleChatMessagePost">
                    <i class="icon-paper-clip"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
      <tab-pane name="提醒" class="page-quick-sidebar-alerts">
        <div class="page-quick-sidebar-alerts-list" v-slimscroll="handleGetAlertsHeight()">
          <h3 class="list-heading" v-if="generalAlerts.length > 0">一般提醒</h3>
          <ul class="feeds list-items" v-if="generalAlerts.length > 0">
            <li v-for="(feed, index) in generalAlerts">
              <div class="col1">
                <div class="cont">
                  <div class="cont-col1">
                    <div class="label label-sm" :class="'label-' + feed.status">
                      <i class="fa" :class="'fa-' + feed.icon"></i>
                    </div>
                  </div>
                  <div class="cont-col2">
                    <div class="desc">
                      {{feed.desc}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col2">
                <div class="date"> {{handleGetDateDiff(feed.time)}} </div>
              </div>
            </li>
          </ul>
          <h3 class="list-heading" v-if="systemAlerts.length > 0">系统提醒</h3>
          <ul class="feeds list-items" v-if="systemAlerts.length > 0">
            <li v-for="(feed, index) in systemAlerts">
              <div class="col1">
                <div class="cont">
                  <div class="cont-col1">
                    <div class="label label-sm" :class="'label-' + feed.status">
                      <i class="fa" :class="'fa-' + feed.icon"></i>
                    </div>
                  </div>
                  <div class="cont-col2">
                    <div class="desc">
                      {{feed.desc}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col2">
                <div class="date"> {{handleGetDateDiff(feed.time)}} </div>
              </div>
            </li>
          </ul>
        </div>
      </tab-pane>
      <tab-pane name="任务" class="page-quick-sidebar-settings">
        <div class="page-quick-sidebar-settings-list" v-slimscroll="handleGetSettingsHeight()">
          <h3 class="list-heading">未完任务</h3>
          <ul class="list-items borderless">
            <li v-for="(task, index) in tasks">
              <p>
                {{task.name}}<span class="pull-right">{{task.progress}}%</span>
              </p>
              <progress-bar :value="task.progress" :theme="task.state" stripe="active"></progress-bar>
            </li>
          </ul>
        </div>
      </tab-pane>
      <tab-pane name="设置" class="page-quick-sidebar-settings">
        <div class="page-quick-sidebar-settings-list" v-slimscroll="handleGetSettingsHeight()">
          <h3 class="list-heading">一般设置</h3>
          <ul class="list-items borderless">
            <li><switch-btn title="显示提醒："></switch-btn></li>
            <li><switch-btn title="允许跟踪：" theme="success"></switch-btn></li>
            <li><switch-btn title="错误日志：" theme="danger"></switch-btn></li>
            <li><switch-btn title="问题提交：" theme="warning"></switch-btn></li>
            <li><switch-btn title="短信提醒：" theme="info"></switch-btn></li>
          </ul>
          <h3 class="list-heading">系统设置</h3>
          <ul class="list-items borderless">
            <li> 安全等级
              <select class="form-control input-inline input-sm input-small">
                <option value="1">低</option>
                <option value="2" selected>中</option>
                <option value="e">高</option>
              </select>
            </li>
            <li> 发送失败尝试次数
              <input class="form-control input-inline input-sm input-small" value="5" /> </li>
            <li> SMTP 端口
              <input class="form-control input-inline input-sm input-small" value="3560" /> </li>
            <li><switch-btn title="通知系统错误：" theme="info"></switch-btn></li>
            <li><switch-btn title="通知通信错误：" theme="info"></switch-btn></li>
          </ul>
          <div class="inner-content">
            <button class="btn btn-success">
              <i class="icon-settings"></i> 保存</button>
          </div>
        </div>
      </tab-pane>
    </tabs>
  </div>
</template>
<script>
  import $ from 'jquery'
  import {common} from '@/untils'

  export default{
    data () {
      return {
        chatShow: false,
        message: '',
        tabIndex: 0,
        activeReceiver: null
      }
    },
    props: {
      alerts: {type: Array},
      users: {type: Array},
      messages: {type: Array},
      tasks: {type: Array},
      activeUser: {type: Number}
    },
    computed: {
      activeMessages () {
        var self = this
        return this.messages.map(msg => {
          if ((msg.sender === self.activeUser && msg.receiver === self.activeReceiver) || (msg.sender === self.activeReceiver && msg.receiver === self.activeUser)) {
            return msg
          }
        }).filter(msg => msg !== undefined)
      },
      generalAlerts () {
        return this.alerts.map(alert => {
          if (alert.type === 1) {
            return alert
          }
        }).filter(alert => alert !== undefined)
      },
      systemAlerts  () {
        return this.alerts.map(alert => {
          if (alert.type === 2) {
            return alert
          }
        }).filter(alert => alert !== undefined)
      },
      staffs () {
        return this.users.map(user => {
          if (user.role === 1) {
            return user
          }
        }).filter(user => user !== undefined)
      },
      customers () {
        return this.users.map(user => {
          if (user.role === 2) {
            return user
          }
        }).filter(user => user !== undefined)
      }
    },
    methods: {
      handleGetUnReadMessages (sender) {
        var self = this
        return this.messages.map(msg => {
          if (msg.sender === sender && msg.receiver === self.activeUser && msg.read === false) {
            return msg
          }
        }).filter(msg => msg !== undefined)
      },
      handleChartMessageVisible (user) {
        this.activeReceiver = user.id
        this.chatShow = true
        this.handleGetUnReadMessages(user.id).map(msg => {
          msg.read = true
        })
      },
      handleChatMessagePost () {
        if (this.message.trim() !== '') {
          var time = new Date()
          this.$emit('chat-post', {
            sender: this.activeUser,
            receiver: this.activeReceiver,
            datetime: time.getFullYear() + '/' + time.getMonth() + '/' + time.getDay() + ' ' + time.getHours() + ':' + time.getMinutes(),
            content: this.message,
            read: false
          })
          this.message = ''
        }
      },
      handleGetDateDiff (dateStr) {
        return common.getDateDiff(dateStr)
      },
      handleGetChatUsersHeight () {
        var wrapper = $('.page-quick-sidebar-wrapper')
        return wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true)
      },
      handleGetChatMessagesHeight () {
        var wrapper = $('.page-quick-sidebar-wrapper')
        var wrapperChat = wrapper.find('.page-quick-sidebar-chat')
        var chatUsersHeight = this.handleGetChatUsersHeight()
        var chatMessagesHeight = chatUsersHeight - wrapperChat.find('.page-quick-sidebar-chat-user-form').outerHeight(true)
        return chatMessagesHeight - wrapperChat.find('.page-quick-sidebar-nav').outerHeight(true)
      },
      handleGetAlertsHeight () {
        var wrapper = $('.page-quick-sidebar-wrapper')
        return wrapper.height() - 80 - wrapper.find('.nav-justified > .nav-tabs').outerHeight()
      },
      handleGetSettingsHeight () {
        var wrapper = $('.page-quick-sidebar-wrapper')
        return wrapper.height() - 80 - wrapper.find('.nav-justified > .nav-tabs').outerHeight()
      }
    }
  }
</script>
