<template>
  <div>
    <h1>Show Blog</h1>
    <p> ID: {{blog.id}}</p>
    <p> Title: {{blog.title}}</p>
    <p> Content: {{blog.content}}</p>
    <p> Category: {{blog.category}}</p>
    <p> Status: {{blog.status}}</p>
    <p>
      <button v-on:click="navigateTo('/blog/edit/' + blog.id)">edit blog</button>
      <button v-on:click="navigateTo('/blogs')">back</button>
    </p>
  </div>
</template>
<script>
import BlogsService from '@/services/BlogsService';

export default {
  data () {
    return {
      blog: {}
    }
  },
  async created () {
    try {
      let blogId = this.$route.params.blogId
      this.blog = (await BlogsService.show(blogId)).data
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
}
</script>
<style scoped>

</style>
