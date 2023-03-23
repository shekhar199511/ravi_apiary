<template>
  <div>
    <div
      v-for="(post, index) in getPosts"
      :key="index"
      class="card"
    >
      <router-link :to="`/post/view/${post.id}`">
        <p>{{ post.title }}</p>
        <hr />
        <p>{{ post.body }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  props: ["posts", "filteredPosts"],
  data() {
    return {
      searchKey: ""
    };
  },
  created() {},
  computed: {
    getPosts() {
      if (this.filteredPosts.length === 0) return this.posts;
      else return this.filteredPosts;
    }
  }
};
</script>
<style scoped>
.card {
  border: 1px solid black;
  border-radius: 5px;
  color: blue;
  box-shadow: 0.25px 0.25px 0.5px 2px gray;
  padding: 5px 5px;
  margin: 10px 0;
  cursor: pointer;
}
</style>
