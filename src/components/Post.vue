<template>
  <div>
    <div class="card" v-if="selectedPost">
      <p>{{ selectedPost[0].title }}</p>
      <hr />
      <p>{{ selectedPost[0].body }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Post",
  props: ["searchResult"],
  data() {
    return {
      selectedPost: null
    };
  },
  watch : {
    searchResult(){
      this.setSelectedPost()
    }
  },
  created(){
        if(this.searchResult){
          this.setSelectedPost()
        }
        
  },
  methods : {
    setSelectedPost(){
      this.selectedPost = this.searchResult.filter(
        item => item.id == this.$route.params.id
      );
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
}
</style>
