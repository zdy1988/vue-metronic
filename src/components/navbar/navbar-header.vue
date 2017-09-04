<script>
  import _dropdownitem from '../mixins/_dropdown-item'
  export default {
    mixins: [_dropdownitem],
    data () {
      return {
        itemDom: 'div',
        itemClass: 'navbar-header',
        linkClass: 'navbar-brand'
      }
    },
    name: 'NavbarHeader'
  }
</script>
