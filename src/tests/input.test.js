import Input from "../components/Input.vue";
import { shallowMount } from "@vue/test-utils";

describe("Input.vue", () => {
  let wrapper = shallowMount(Input);

  it("Check if input rendered", () => {
    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  it("Check if event triggered on input", () => {
    const input = wrapper.find("input");
    input.element.value = "h";
    input.trigger("input");
    expect(wrapper.emitted("get-results")).toBeTruthy();
  });
});
