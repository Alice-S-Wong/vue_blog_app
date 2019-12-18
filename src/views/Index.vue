<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <div class="card" style="width: 18rem;">
        <img v-bind:src="post.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.body}}</p>
          <a v-bind:href="`/posts/${post.id}`" class="btn btn-primary">See More Info</a>
        </div>
      </div>
<!--       <p>User id: {{ post.user_id }}</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <img :src="post.image"> -->
<!--       <br>
      <router-link v-bind:to="`/posts/${post.id}`">Show info</router-link>
      <hr> -->
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