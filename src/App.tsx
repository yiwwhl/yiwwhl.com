import { defineComponent } from "vue";
import RouterView from "./router/routes/RouterView";

export default defineComponent({
  setup() {
    return () => {
      return <RouterView />;
    };
  },
});
