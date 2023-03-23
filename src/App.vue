<template>
  <router-view :searchResult="searchResult" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchResult: null,
    };
  },
  async created() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    this.searchResult = await response.json();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
