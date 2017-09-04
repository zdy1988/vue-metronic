import faicons from '@/untils/faicons'
import Fa from '@/components/icon/faicon'

export default {
  props: {
    text: {type: String, default: ''},
    icon: {type: String, validator: value => faicons.indexOf(value) > -1},
    path: {type: String},
    href: {type: String, default: 'javascript:;'},
    klass: {type: String}
  },
  data () {
    return {
      active: false,
      itemDom: 'li',
      itemClass: '',
      linkClass: ''
    }
  },
  computed: {
    classes () {
      return [
        {'active': this.active},
        {[this.itemClass]: !!this.itemClass},
        {[this.klass]: !!this.klass}
      ]
    }
  },
  render (h) {
    let children = []
    if (this.$slots.default) {
      children = [this.$slots.default]
    } else {
      const fa = this.icon ? h(Fa, {
        props: {
          name: this.icon
        }
      }) : ''
      if (this.path) {
        children.push(h('router-link', {
          props: {
            to: this.path
          },
          attrs: {
            class: this.linkClass
          }
        }, [fa, ' ', this.text]))
      } else {
        children.push(h('a', {
          attrs: {
            href: this.href,
            class: this.linkClass
          }
        }, [fa, ' ', this.text]))
      }
    }
    return h(
      this.itemDom,
      {class: this.classes},
      children
    )
  }
}
