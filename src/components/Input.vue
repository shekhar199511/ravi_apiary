<template>
  <input
    type="text"
    placeholder="Search"
    v-model="searchKey"
    @input="searchHandler"
    class="input"
  />
</template>
<script>
export default {
  name: "Input",
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    searchHandler() {
      this.$emit("get-results", this.searchKey);
    },
  },
};
</script>
<style scoped>
.input {
  border-radius: 10px;
  background-color: whitesmoke;
  border: none;
  height: 2rem;
  width: 100%;
}
.input:focus {
  border: 2px solid blue;
}
</style>