import { createApp } from "vue";
import App from "./App.jsx";
import { useTitleWithDefault } from "./hooks/interface";
import router from "./router";
import pinia from "./store";
import ArcoVue from "@arco-design/web-vue";

import "@/assets/style/base.scss";
import "@arco-design/web-vue/dist/arco.css";

/**
 * init
 */
useTitleWithDefault();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ArcoVue);

app.mount("#app");
