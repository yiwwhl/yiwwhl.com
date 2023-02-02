import { defineComponent } from "vue";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";
import router from "@/router";

interface NavBarItem {
  routerName: string;
  label: string;
}

export default defineComponent({
  setup() {
    const navBarList: NavBarItem[] = [
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

    const handleNavBarClick = (navBar: NavBarItem) => {
      try {
        router.push({ name: navBar.routerName });
      } catch {
        router.push({ name: "NotFound" });
      }
    };

    return () => {
      return (
        <div class={styles.contentWrapper}>
          <div class={styles.navBarWrapper}>
            {navBarList.map((navBar) => (
              <div
                class={styles.navBar}
                onClick={() => handleNavBarClick(navBar)}
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
