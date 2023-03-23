import PostListItem from "../components/PostListItem.vue";
import { mount } from "@vue/test-utils";

describe("PostListItem.vue", () => {
  it("Check if post getting listed", () => {
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
