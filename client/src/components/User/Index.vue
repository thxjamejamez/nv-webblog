<template>
  <div>
    <h1>Get All Users</h1>
    <h4>จำนวนผู้ใช้: {{users.length}}</h4>
    <div v-if="users.length">
      <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{user.id}}</p>
        <p>Firstname - LastName: {{user.name}} - {{user.lastname}}</p>
        <p>Email: {{user.email}}</p>
        <p>Password: {{user.password}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
  data () {
    return {
      users: []
    }
  },
  async created() {
    this.users = (await UsersService.index()).data
  },
}
</script>
<style scoped>

</style>
