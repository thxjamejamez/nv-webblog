<template>
  <div>
    <h1>Get All Users</h1>
    <h4>จำนวนผู้ใช้: {{users.length}}</h4>
    <button @click="navigateTo('/user/create')">Create User</button>
    <div v-if="users.length">
      <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{user.id}}</p>
        <p>Firstname - LastName: {{user.name}} - {{user.lastname}}</p>
        <p>Email: {{user.email}}</p>
        <p>Password: {{user.password}}</p>
        <p>
          <button @click="navigateTo('/user/'+user.id)">View User</button>
          <button @click="navigateTo('/user/edit/'+user.id)">Edit User</button>
          <button @click="deleteUser(user)">Delete User</button>
        </p>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteUser (user) {
      let result = confirm('Do u want to delete ?')
      if(result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData () {
      this.users = (await UsersService.index()).data
    }
  },
}
</script>
<style scoped>

</style>
