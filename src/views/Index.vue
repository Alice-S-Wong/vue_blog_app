<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <p>User id: {{ post.user_id }}</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <img :src="post.image">
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Posts index",
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      this.posts = response.data;
      console.log(response.data);
    });
  },
  methods: {}
};
</script>