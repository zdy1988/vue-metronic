/**
 * Created by virus on 2017/4/23.
 * Update by https://github.com/xxcanghai/cnblogsFiles/blob/master/vue-mixins/propsync.js
 */

const isEnableName = 'propsync'

function getDataName (propName) {
  return propName + '_sync'
}

export default {
  data: function () {
    var data = {}
    var that = this
    var propsKeys = Object.keys((that.$options.props) || {})
    propsKeys.forEach(function (prop, i) {
      var isEnable = that.$options.props[prop][isEnableName]
      if (isEnable === true) {
        var dataName = getDataName(prop)
        data[dataName] = that[prop]
      }
    })
    return data
  },
  created: function () {
    var that = this
    var propsKeys = Object.keys((that.$options.props) || {})
    propsKeys.forEach(function (prop, i) {
      var dataName = getDataName(prop)
      var isEnable = that.$options.props[prop][isEnableName]
      if (isEnable === true) {
        that.$watch(prop, (newVal, oldVal) => {
          that[dataName] = newVal
        }, {})
        that.$watch(dataName, (newVal, oldVal) => {
          that.$emit('onPropsChange', prop, newVal, oldVal)
        }, {})
      }
    })
  }
}
