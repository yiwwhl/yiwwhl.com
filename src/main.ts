import { createApp } from "vue";
import App from "./App.jsx";
import { useTitleWithDefault } from "./hooks/interface";

/**
 * init
 */
useTitleWithDefault();

const app = createApp(App);
app.mount("#app");
