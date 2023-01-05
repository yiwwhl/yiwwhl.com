import { createApp } from "vue";
import App from "./App.jsx";
import { useTitleWithDefault } from "./hooks/interface";
import router from "./router";
import pinia from "./store";

/**
 * init
 */
useTitleWithDefault();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
