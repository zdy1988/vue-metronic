/**
 * Created by dell on 2017/6/16.
 */
export default {
  props: {
    mode: {type: String, default: 'out-in'},
    animate: {type: Boolean, default: true}
  },
  computed: {
    name () {
      return this.animate ? this.$options.name : ''
    }
  }
}
