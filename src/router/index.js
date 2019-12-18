import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sample from '../views/Sample.vue'
import PostsIndex from '../views/Index.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import New from "../views/New.vue";
import Show from "../views/Show.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sample',
    name: 'sample',
    component: Sample
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsIndex
  },
  { 
    path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: Logout 
  },
  { 
    path: "/posts/new", 
    name: "new", 
    component: New 
  },
  { 
    path: "/posts/:id", 
    name: "show", 
    component: Show 
  },
    { 
    path: "/posts/:id/edit", 
    name: "edit", 
    component: Edit 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
