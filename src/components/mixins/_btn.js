/**
 * Created by dell on 2017/6/21.
 */
import {colorKeys} from '@/untils'

export default {
  props: {
    color: {type: String, validator: value => colorKeys.indexOf(value) > -1},
    state: {type: String, default: 'default', validator: value => ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'].indexOf(value) > -1},
    stripe: {type: String, validator: value => colorKeys.indexOf(value) > -1},
    round: {type: Boolean},
    outline: {type: Boolean},
    size: {type: String, validator: value => ['lg', 'sm', 'xs', 'icon-only'].indexOf(value) > -1},
    block: {type: Boolean},
    disabled: {type: Boolean},
    loading: {type: Boolean, default: false},
    loadingText: {type: String, default: 'Loading...'},
    klass: {type: String}
  },
  computed: {
    classes () {
      return [
        {'btn': true},
        {[this.color]: !!this.color},
        {[`btn-${this.state}`]: !!this.state && !this.color && !this.stripe},
        {[`${this.stripe}-stripe`]: !!this.color && !!this.stripe},
        {'circle': !!this.round},
        {'btn-outline': !!this.outline},
        {[`btn-${this.size}`]: !!this.size},
        {[`btn-block`]: !!this.block},
        {'disabled': !!this.disabled},
        {[this.klass]: !!this.klass}
      ]
    }
  },
  methods: {
    _click (e) {
      this.$emit('click', e)
    }
  }
}
