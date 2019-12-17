<template>
  <div class="New-Post">
    <h1>{{ message }}</h1>
    <p>User ID:<input type="text" v-model="newUserId"></p>
    <p>Title:<input type="text" v-model="newTitle"></p>
    <p>Body:<input type="text" v-model="newBody"></p>
    <p>Image URL:<input type="text" v-model="newImage"></p>
    <button v-on:click="createPost()">Create Post</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Create a Post",
      newUserId: "",
      newTitle: "",
      newBody: "",
      newImage: ""
    };
  },
  created: function() {},
  methods: {
    createPost: function() {
      var params = {
        id: this.newUserId,
        title: this.newTitle,
        body: this.newBody,
        image: this.newImage
      };
      axios.post("/api/posts", params).then(response => {
        this.$router.push("/index");
      });
    }
  }
};
</script>