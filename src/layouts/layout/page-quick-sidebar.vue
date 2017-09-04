<template>
  <div class="page-quick-sidebar">
    <tabs :limit="2" :active-index.sync="tabIndex">
      <tab-pane name="联系人" class="page-quick-sidebar-chat" :class="{'page-quick-sidebar-content-item-shown': chatShow}" cur>
        <div class="page-quick-sidebar-list">
          <div class="page-quick-sidebar-chat-users" v-slimscroll="handleGetChatUsersHeight()">
            <page-quick-sidebar-chat-user-group :users="staffs" name="工作人员" @item-click="handleDoChat"></page-quick-sidebar-chat-user-group>
            <page-quick-sidebar-chat-user-group :users="customers" name="目标客户" @item-click="handleDoChat"></page-quick-sidebar-chat-user-group>
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
                   :class="{out:user.id === msg.senderId, in: activeReceiver.id === msg.senderId}"
                   v-for="(msg, index) in activeMessages" :key="index">
                <img class="avatar" alt="" :src="msg.sender.avatar" />
                <div class="message">
                  <span class="arrow"></span>
                  <a href="javascript:;" class="name">{{msg.sender.name}}</a>
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
          <page-quick-sidebar-alerts-group :alerts="generalAlerts" name="一般提醒"></page-quick-sidebar-alerts-group>
          <page-quick-sidebar-alerts-group :alerts="systemAlerts" name="系统提醒"></page-quick-sidebar-alerts-group>
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
              <progress-bar :value="task.progress" :state="task.state" stripe="active"></progress-bar>
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
  import { mapState, mapGetters } from 'vuex'

  import PageQuickSidebarChatUserGroup from './page-quick-sidebar-chat-user-group'
  import PageQuickSidebarAlertsGroup from './page-quick-sidebar-alerts-group'

  export default{
    data () {
      return {
        tabIndex: 0,
        chatShow: false,
        message: '',
        activeReceiver: {
          id: 0
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.permission.user
      }),
      ...mapState({
        messages: state => state.app.messages,
        tasks: state => state.app.tasks
      }),
      ...mapGetters('app', [
        'staffs', 'customers',
        'generalAlerts', 'systemAlerts'
      ]),
      activeMessages () {
        return this.messages.filter(msg => (msg.senderId === this.user.id && msg.receiverId === this.activeReceiver.id) || (msg.senderId === this.activeReceiver.id && msg.receiverId === this.user.id))
      }
    },
    methods: {
      handleDoChat (user) {
        this.activeReceiver = user
        this.chatShow = true
      },
      handleChatMessagePost () {
        if (this.message.trim() !== '') {
          var time = new Date()
          this.$store.dispatch('app/postMessage', {
            id: '',
            senderId: this.user.id,
            receiverId: this.activeReceiver.id,
            datetime: time.getFullYear() + '/' + time.getMonth() + '/' + time.getDay() + ' ' + time.getHours() + ':' + time.getMinutes(),
            content: this.message,
            read: false
          })
          this.message = ''
        }
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
    },
    components: {
      PageQuickSidebarChatUserGroup,
      PageQuickSidebarAlertsGroup
    }
  }
</script>
