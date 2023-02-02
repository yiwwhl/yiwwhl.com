import { defineComponent } from "vue";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";
import router from "@/router";

export default defineComponent({
  setup() {
    const navBarList = [
      {
        routerName: "HomePage",
        label: "Home",
      },
      {
        routerName: "ProjectsList",
        label: "Project",
      },
      {
        routerName: "About",
        label: "About",
      },
    ];

    return () => {
      return (
        <div class={styles.contentWrapper}>
          <div class={styles.navBarWrapper}>
            {navBarList.map((navBar) => (
              <div
                class={styles.navBar}
                onClick={() => router.push({ name: navBar.routerName })}
              >
                {navBar.label}
              </div>
            ))}
          </div>
          <img src={avatar} class={styles.avatar}></img>
        </div>
      );
    };
  },
});
