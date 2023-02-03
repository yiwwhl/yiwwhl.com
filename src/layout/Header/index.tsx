import { defineComponent } from "vue";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";
import router from "@/router";
import cyberpunkCoder from "@/assets/images/cyberpunkCoder.jpg";
import city from "@/assets/images/city.png";
import grass from "@/assets/images/grass.png";

interface NavBarItem {
  routerName: string;
  label: string;
  headerImg: string;
}

export default defineComponent({
  setup() {
    const navBarList: NavBarItem[] = [
      {
        routerName: "HomePage",
        label: "Home",
        headerImg: cyberpunkCoder,
      },
      {
        routerName: "ProjectsList",
        label: "Project",
        headerImg: city,
      },
      {
        routerName: "About",
        label: "About",
        headerImg: grass,
      },
    ];

    const currentNavBarIndex = ref(0);

    const handleNavBarClick = (navBar: NavBarItem, index: number) => {
      try {
        currentNavBarIndex.value = index;
        router.push({ name: navBar.routerName });
      } catch {
        currentNavBarIndex.value = 0;
        router.push({ name: "NotFound" });
      }
    };

    return () => {
      return (
        <>
          <div class={styles.contentWrapper}>
            <div class={styles.navBarWrapper}>
              {navBarList.map((navBar, index) => (
                <div
                  class={styles.navBar}
                  onClick={() => handleNavBarClick(navBar, index)}
                >
                  {navBar.label}
                </div>
              ))}
            </div>
            <img src={avatar} class={styles.avatar}></img>
          </div>

          <img
            src={navBarList[currentNavBarIndex.value].headerImg}
            class={styles.headerImg}
          ></img>
        </>
      );
    };
  },
});
