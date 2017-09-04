/**
 * Created by virus_zhh on 2017/9/3.
 */
import $ from 'jquery'
import {ajax} from '@/untils'

const app = {
  namespaced: true,
  state: {
    users: [],
    messages: [],
    tasks: [],
    alerts: []
  },
  getters: {
    staffs: state => {
      return state.users.filter(user => user.type === 1)
    },
    customers: state => {
      return state.users.filter(user => user.type === 2)
    },
    guests: state => {
      return state.users.filter(user => user.type === 3)
    },
    generalAlerts: state => {
      return state.alerts.filter(alert => alert.type === 1)
    },
    systemAlerts: state => {
      return state.alerts.filter(alert => alert.type === 2)
    },
    unReadMessages: state => {
      return state.messages.filter(msg => msg.read === false)
    }
  },
  mutations: {
    ADD_USERS: (state, user) => {
      state.users.push(user)
    },
    ADD_MESSAGES: (state, message) => {
      message.sender = state.users.find(user => user.id === message.senderId)
      message.receiver = state.users.find(user => user.id === message.receiverId)
      state.messages.push(message)
    },
    ADD_TASKS: (state, task) => {
      state.tasks.push(task)
    },
    ADD_ALERTS: (state, alert) => {
      state.alerts.push(alert)
    },
    READ_MESSAGE: (state, message) => {
      const index = state.messages.indexOf(message)
      message.read = true
      state.messages.splice(index, 1, message)
    }
  },
  actions: {
    initUsers ({commit}) {
      return $.Deferred(function (defer) {
        ajax.post('GetUsers').done((rst) => {
          if (rst.status === 200) {
            for (let item of rst.data) {
              commit('ADD_USERS', item)
            }
            defer.resolve()
          }
        })
      }).promise()
    },
    initMessages ({commit}) {
      return $.Deferred(function (defer) {
        ajax.post('GetMessages').done((rst) => {
          if (rst.status === 200) {
            for (let item of rst.data) {
              commit('ADD_MESSAGES', item)
            }
            defer.resolve()
          }
        })
      }).promise()
    },
    initTasks ({commit}) {
      return $.Deferred(function (defer) {
        ajax.post('GetTasks').done((rst) => {
          if (rst.status === 200) {
            for (let item of rst.data) {
              commit('ADD_TASKS', item)
            }
            defer.resolve()
          }
        })
      }).promise()
    },
    initAlerts ({commit}) {
      return $.Deferred(function (defer) {
        ajax.post('GetAlerts').done((rst) => {
          if (rst.status === 200) {
            for (let item of rst.data) {
              commit('ADD_ALERTS', item)
            }
            defer.resolve()
          }
        })
      }).promise()
    },
    readMessage ({commit}, msg) {
      commit('READ_MESSAGE', msg)
    },
    postMessage ({commit}, msg) {
      commit('ADD_MESSAGES', msg)
    }
  }
}

export default app
