<template>
  <row>
    <column :md="12">
      <dropdown text="菜单" color="red" icon="pencil">
        <dropdown-item text="Item 1" icon="pencil"></dropdown-item>
        <dropdown-item text="Item 2" icon="pencil"></dropdown-item>
        <dropdown-item text="Item 3" icon="pencil"></dropdown-item>
        <dropdown-divider></dropdown-divider>
        <dropdown-item text="Item 4" icon="pencil"></dropdown-item>
      </dropdown>
    </column>
    <column :md="12" class="margin-top-10">
      <navbar>
        <navbar-header text="Home"></navbar-header>
        <navbar-nav>
          <navbar-nav-item text="Page Color" path="/main/color"></navbar-nav-item>
          <navbar-nav-item text="Page Switch" path="/main/switch"></navbar-nav-item>
          <navbar-nav-dropdown text="More">
            <navbar-nav-dropdown-item  text="Page Color" path="/main/color"></navbar-nav-dropdown-item>
            <navbar-nav-dropdown-item  text="Page Color" path="/main/color"></navbar-nav-dropdown-item>
            <navbar-nav-dropdown-divider></navbar-nav-dropdown-divider>
            <navbar-nav-dropdown-item  text="Page Color" path="/main/color"></navbar-nav-dropdown-item>
          </navbar-nav-dropdown>
        </navbar-nav>
      </navbar>
    </column>
  </row>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
