import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import styles from "./index.module.scss";

export default defineComponent({
  setup() {
    return () => {
      const header = () => <div class={styles.header}></div>;
      return (
        <>
          {header()}
          <RouterView />
        </>
      );
    };
  },
});
