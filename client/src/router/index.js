import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // User
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

    //Blog
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:userId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:userId',
      name: 'blog',
      component: BlogShow
    },
  ]
})
