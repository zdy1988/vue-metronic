<template>
  <div class="page-quick-sidebar">
    <tabs :limit="2">
      <tab-pane name="联系人" class="page-quick-sidebar-chat" :class="{'page-quick-sidebar-content-item-shown': chartShow}" cur>
        <div class="page-quick-sidebar-list">
          <div class="page-quick-sidebar-chat-users">
            <div v-for="(record, index) in users" :key="index" v-if="record.members.length > 0">
              <h3 class="list-heading">{{record.group}}</h3>
              <ul class="media-list list-items">
                <li class="media" v-for="(member, index2) in record.members" :key="index2" @click="showChart(member)">
                  <div class="media-status" v-if="unReadMessages(member.id).length > 0">
                    <badge theme="success">{{unReadMessages(member.id).length}}</badge>
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
        </div>
        <div class="page-quick-sidebar-item">
          <div class="page-quick-sidebar-chat-user">
            <div class="page-quick-sidebar-nav">
              <a href="javascript:;" class="page-quick-sidebar-back-to-list" @click="chartShow = false">
                <i class="icon-arrow-left"></i> 返回</a>
            </div>
            <div class="page-quick-sidebar-chat-user-messages">
              <div class="post"
                   :class="{out:activeUser === msg.sender, in: activeReceiver === msg.sender}"
                   v-for="(msg, index) in activeMessages" :key="index">
                <img class="avatar" alt="" :src="activeUser === msg.sender ? activeUserInfo.handPic : activeReceiverInfo.handPic" />
                <div class="message">
                  <span class="arrow"></span>
                  <a href="javascript:;" class="name">{{activeUser === msg.sender ? activeUserInfo.name : activeReceiverInfo.name}}</a>
                  <span class="datetime">{{msg.datetime}}</span>
                  <span class="body"> {{msg.content}} </span>
                </div>
              </div>
            </div>
            <div class="page-quick-sidebar-chat-user-form">
              <div class="input-group">
                <input type="text" class="form-control" v-model="message" placeholder="请在这里输入发送消息...">
                <div class="input-group-btn">
                  <button type="button" class="btn green" @click="sendMessage">
                    <i class="icon-paper-clip"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
      <tab-pane name="提醒" class="page-quick-sidebar-alerts">
        <div class="page-quick-sidebar-alerts-list">
          <div v-for="(record, index) in alerts" :key="index" v-if="record.feeds.length > 0">
            <h3 class="list-heading">{{record.group}}</h3>
            <ul class="feeds list-items">
              <li v-for="(feed, index2) in record.feeds">
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
                  <div class="date"> {{dateDiff(feed.time)}} </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </tab-pane>
      <tab-pane name="设置" class="page-quick-sidebar-settings">
        <div class="page-quick-sidebar-settings-list">
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
      <tab-pane name="活动" class="page-quick-sidebar-settings">4</tab-pane>
    </tabs>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        users: [
          {
            group: '工作人员',
            members: [
              {
                id: 1,
                name: '小张',
                post: 'CEO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg'
              },
              {
                id: 2,
                name: '小王',
                post: 'CTO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg'
              },
              {
                id: 3,
                name: '小李',
                post: 'CFO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg'
              },
              {
                id: 4,
                name: '小戴',
                post: '项目经理',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg'
              }
            ]
          },
          {
            group: '目标客户',
            members: [
              {
                id: 5,
                name: '小张',
                post: 'CEO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3.jpg'
              },
              {
                id: 6,
                name: '小王',
                post: 'CTO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar1.jpg'
              },
              {
                id: 7,
                name: '小李',
                post: 'CFO',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar4.jpg'
              },
              {
                id: 8,
                name: '小戴',
                post: '项目经理',
                handPic: 'http://zdyonline.com/vue-metronic/img/layouts/layout/avatar2.jpg'
              }
            ]
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
        chartShow: false,
        message: '',
        activeUser: 1,
        activeReceiver: null,
        alerts: [
          {
            group: '一般提醒',
            feeds: [
              {
                icon: 'check',
                status: 'info',
                desc: '您有4个未处理任务。',
                time: '2016/1/20 19:59:30'
              },
              {
                icon: 'bar-chart-o',
                status: 'success',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 1:22:22'
              },
              {
                icon: 'user',
                status: 'danger',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 6:22:22'
              },
              {
                icon: 'shopping-cart',
                status: 'info',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 11:22:22'
              }
            ]
          },
          {
            group: '系统提醒',
            feeds: [
              {
                icon: 'check',
                status: 'info',
                desc: '您有4个未处理任务。',
                time: '2016/1/20 19:59:30'
              },
              {
                icon: 'bar-chart-o',
                status: 'success',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 1:22:22'
              },
              {
                icon: 'user',
                status: 'danger',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 6:22:22'
              },
              {
                icon: 'shopping-cart',
                status: 'info',
                desc: '您有4个未处理任务。',
                time: '2017/8/7 11:22:22'
              }
            ]
          }
        ]
      }
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
      activeUserInfo () {
        return this.getUserInfo(this.activeUser)
      },
      activeReceiverInfo () {
        return this.getUserInfo(this.activeReceiver)
      }
    },
    methods: {
      unReadMessages (sender) {
        var self = this
        return this.messages.map(msg => {
          if (msg.sender === sender && msg.receiver === self.activeUser && msg.read === false) {
            return msg
          }
        }).filter(msg => msg !== undefined)
      },
      showChart (user) {
        this.activeReceiver = user.id
        this.chartShow = true
        this.unReadMessages(user.id).map(msg => {
          msg.read = true
        })
      },
      sendMessage () {
        if (this.message.trim() !== '') {
          var time = new Date()
          this.messages.push({
            sender: this.activeUser,
            receiver: this.activeReceiver,
            datetime: time.getFullYear() + '/' + time.getMonth() + '/' + time.getDay() + ' ' + time.getHours() + ':' + time.getMinutes(),
            content: this.message,
            read: false
          })
          this.message = ''
        }
      },
      dateDiff (dateStr) {
        var minute = 1000 * 60
        var hour = minute * 60
        var day = hour * 24
        var month = day * 30
        var now = new Date().getTime()
        var diffValue = now - Date.parse(dateStr.replace(/-/gi, '/'))
        if (diffValue < 0) {
          return
        }
        var monthC = diffValue / month
        var weekC = diffValue / (7 * day)
        var dayC = diffValue / day
        var hourC = diffValue / hour
        var minC = diffValue / minute
        var result = ''
        if (monthC >= 1) {
          result = '' + parseInt(monthC) + '月前'
        } else if (weekC >= 1) {
          result = '' + parseInt(weekC) + '周前'
        } else if (dayC >= 1) {
          result = '' + parseInt(dayC) + '天前'
        } else if (hourC >= 1) {
          result = '' + parseInt(hourC) + '小时前'
        } else if (minC >= 1) {
          result = '' + parseInt(minC) + '分钟前'
        } else {
          result = '刚刚'
        }
        return result
      },
      getUserInfo (id) {
        for (let user of this.users) {
          for (let member of user.members) {
            if (member.id === id) {
              return member
            }
          }
        }
      }
    }
  }
</script>
