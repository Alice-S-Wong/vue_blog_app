<template>
  <div class="Edit-Post">
    <h1>{{ message }}</h1>
    <p>Title:<input type="text" v-model="post.title"></p>
    <p>Body:<input type="text" v-model="post.body"></p>
    <p>Image URL:<input type="text" v-model="post.image"></p>
    <button v-on:click="createPost()">Edit Post</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Edit Post",
      post: {}
    };
  },
  created: function() {
    axios.get(`api/posts/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {
    createPost: function() {
      var params = {
        title: this.post.title,
        body: this.post.body,
        image: this.post.image
      };
      axios.patch(`/api/posts/${this.$route.params.id}`, params).then(response => {
        this.$router.push(`/posts/${this.$route.params.id}`);
      });
    }
  }
};
</script>