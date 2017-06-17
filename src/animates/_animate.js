/**
 * Created by dell on 2017/6/16.
 */
export default {
  props: {
    mode: {type: String, default: 'out-in'},
    animateClosed: {type: Boolean, default: false}
  },
  computed: {
    name () {
      return this.animateClosed ? '' : this.$options.name
    }
  }
}
