<template>
  <div>
    <h1>Show User</h1>
    <p> ID: {{user.id}}</p>
    <p> Firstname - Lastname: {{user.name}}  {{user.lastname}}</p>
    <p> Email: {{user.email}}</p>
    <p> Password: {{user.password}}</p>

  </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
  data () {
    return {
      user: {}
    }
  },
  async created () {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style scoped>

</style>
