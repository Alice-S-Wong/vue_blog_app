<template>
  <div class="show">
    <h1>{{ message }}</h1>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>    
    <img v-bind:src="post.image">
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
  methods: {}
};
</script>