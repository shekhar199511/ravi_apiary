<template>
  <Input @get-results="filterPosts" />
  <PostListItem
    :posts="searchResult"
    :filteredPosts="filteredPosts"
  />
</template>
<script>
import Input from "./Input.vue";
import PostListItem from "./PostListItem.vue";
export default {
  name: "Posts",
  props: ["searchResult"],
  components: {
    Input,
    PostListItem,
  },
  data() {
    return {
      filteredPosts: [],
    };
  },
  methods: {
    filterPosts(key) {
      this.filteredPosts = this.searchResult.filter(
        (result) => result.body.includes(key) || result.title.includes(key)
      );
    },
  },
};
</script>