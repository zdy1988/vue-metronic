<template>
  <div>
    <h3 class="list-heading" v-if="users.length > 0">{{name}}</h3>
    <ul class="media-list list-items" v-if="users.length > 0">
      <page-quick-sidebar-chat-user-group-item v-for="(member, index) in users" :key="index" :member="member" @click="_click"></page-quick-sidebar-chat-user-group-item>
    </ul>
  </div>
</template>
<script>
  import PageQuickSidebarChatUserGroupItem from './page-quick-sidebar-chat-user-group-item'
  export default {
    name: 'PageQuickSidebarChatUserGroup',
    props: {
      name: '',
      users: {}
    },
    methods: {
      _click (member) {
        this.$emit('item-click', member)
      }
    },
    components: {
      PageQuickSidebarChatUserGroupItem
    }
  }
</script>
