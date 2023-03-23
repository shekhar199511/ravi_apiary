import Posts from "../components/Posts.vue";
import { mount } from "@vue/test-utils";

describe("PostListItem.vue", () => {
  it("Check if Search Bar and Posts are ", () => {
    let wrapper = mount(PostListItem, {
      props: {
        posts: [
          {
            id: 1,
            userId: 1,
            title: "unfiltered",
            body: "unfiltered post"
          }
        ],
        filteredPosts: []
      }
    });
    expect(wrapper.findAll(".card").length).toBe(1);
  });
});
