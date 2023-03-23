import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("./components/Posts");
const Item = () => import("./components/Post");

const routes = [
  { path: "/", component: Home },
  { path: "/post/view/:id", component: Item }
];

const routers = createRouter({
  history: createWebHashHistory(),
  routes
});

export default routers;
