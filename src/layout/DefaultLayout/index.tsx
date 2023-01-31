import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import styles from "./index.module.scss";

export default defineComponent({
  setup() {
    return () => {
      const header = () => <div class={styles.header}></div>;

      const footer = () => (
        <div class={styles.footer}>
          <div>yiwwhl © {new Date().getFullYear()}</div>
        </div>
      );
      return (
        <>
          {header()}
          <div class={styles.contentWrapper}>
            <RouterView />
          </div>
          {footer()}
        </>
      );
    };
  },
});
