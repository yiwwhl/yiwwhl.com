import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import styles from "./index.module.scss";
import Header from "../Header";

export default defineComponent({
  setup() {
    return () => {
      const footer = () => (
        <div class={styles.footer}>
          <div>yiwwhl © {new Date().getFullYear()}</div>
        </div>
      );
      return (
        <>
          <Header />
          <div class={styles.contentWrapper}>
            <RouterView />
          </div>
          {footer()}
        </>
      );
    };
  },
});
