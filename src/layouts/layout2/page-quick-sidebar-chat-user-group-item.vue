<template>
  <li class="media" @click="_click">
    <div class="media-status" v-if="unReadMessagesCount > 0">
      <badge state="success">{{unReadMessagesCount}}</badge>
    </div>
    <img class="media-object" :src="member.avatar" :alt="member.name">
    <div class="media-body">
      <h4 class="media-heading"> {{member.name}} </h4>
      <div class="media-heading-sub"> {{member.post}} </div>
    </div>
  </li>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'PageQuickSidebarChatUserGroupItem',
    props: {
      member: null
    },
    computed: {
      ...mapState({
        user: state => state.permission.user
      }),
      ...mapState({
        messages: state => state.app.messages,
        tasks: state => state.app.tasks
      }),
      unReadMessages () {
        return this.messages.filter(msg => msg.senderId === this.member.id && msg.receiverId === this.user.id && msg.read === false)
      },
      unReadMessagesCount () {
        return this.unReadMessages.length
      }
    },
    methods: {
      _click () {
        this.unReadMessages.map(msg => {
          this.$store.dispatch('app/readMessage', msg)
        })
        this.$emit('click', this.member)
      }
    }
  }
</script>
