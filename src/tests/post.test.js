import Post from "../components/Post.vue";
import { shallowMount } from "@vue/test-utils";

// const localVue = createLocalVue();

describe("Post.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Post, {
      props: {
        searchResult: [
          {
            id: 1,
            userId: 1,
            title: "title",
            body: "body"
          }
        ]
      },
      mocks: {
        $route: { params: { id: 1 } }
      }
    });
  });
  it("Check if paragraph exists", () => {
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});
