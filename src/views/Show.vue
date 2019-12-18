<template>
  <div class="show">
    <button v-on:click="deletePost()">Delete Post</button>
    <h1>{{ message }}</h1>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>    
    <img v-bind:src="post.image">
    <br>
    <router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Message",
      post: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    deletePost: function() {
      console.log('deleting post'); 
      axios.delete(`/api/posts/${this.$route.params.id}`).then(response => {
        this.$router.push("/posts");
      });
    }
  }
};
</script>