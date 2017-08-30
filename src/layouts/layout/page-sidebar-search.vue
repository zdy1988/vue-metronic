<template>
  <li class="sidebar-search-wrapper">
    <div class="sidebar-search" :class="classes">
      <a href="javascript:;" class="remove">
        <i class="icon-close"></i>
      </a>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="查找...">
        <span class="input-group-btn">
          <a href="javascript:;" class="btn submit">
            <i class="icon-magnifier"></i>
          </a>
        </span>
      </div>
    </div>
  </li>
</template>
<script>
  export default{
    props: {
      theme: {type: String, validator: value => ['bordered', 'solid'].indexOf(value) > -1}
    },
    computed: {
      classes () {
        return [
          {'sidebar-search-bordered': !!this.theme},
          {'sidebar-search-solid': !!this.theme && this.theme === 'solid'}
        ]
      }
    }
  }
</script>
