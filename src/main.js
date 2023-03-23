import { createApp } from "vue";
import App from "./App.vue";
import routers from "./routes";

const app = createApp(App);
app.use(routers);

app.mount("#app");

// app.use(routers);
// createApp(App).mount("#app");
