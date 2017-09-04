/**
 * Created by virus_zhh on 2017/9/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import states from './states'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import app from './modules/app'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  states,
  getters,
  actions,
  mutations,
  modules: {
    app,
    permission
  }
})

export default store
