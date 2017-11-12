/**
 * Created by virus_zhh on 2017/9/3.
 */
import $ from 'jquery'
import Cookies from 'js-cookie'
import {ajax} from '@/untils'

const permission = {
  namespaced: true,
  state: {
    user: {
      id: 1,
      username: '',
      name: '',
      avatar: ''
    },
    token: ''
  },
  mutations: {
    SET_USER_INFO: (state, info) => {
      state.user = info
      Cookies.set('current_user', JSON.stringify(info))
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      return $.Deferred(function (defer) {
        ajax.post('Login', userInfo).done((rst) => {
          if (rst.status === 200) {
            commit('SET_USER_INFO', rst.data)
            defer.resolve()
          } else {
            defer.reject({
              message: '查无此用户'
            })
          }
        })
      }).promise()
    },
    checkLogin ({ commit }, userInfo) {
      return $.Deferred(function (defer) {
        let user = Cookies.get('current_user')
        if (user !== undefined) {
          commit('SET_USER_INFO', JSON.parse(user))
          defer.resolve()
        } else {
          defer.reject()
        }
      }).promise()
    }
  }
}

export default permission
