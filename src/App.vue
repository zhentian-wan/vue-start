<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <BlogPost
      v-for="(post, index) in posts"
      :title="post.title"
      :content="post.content"
      :key="index"
    ></BlogPost>
  </div>
</template>

<script>
import BlogPost from "./components/BlogPost";
import callApi from "./fakeApi";

export default {
  name: "App",
  components: {
    BlogPost
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    this.posts = await callApi();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
