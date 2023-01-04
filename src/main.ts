import { createApp } from "vue";
import App from "./App.jsx";
import { useTitleWithDefault } from "./hooks/interface";
import router from "./router";

/**
 * init
 */
useTitleWithDefault();

const app = createApp(App);

app.use(router);

app.mount("#app");
