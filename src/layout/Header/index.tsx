import { defineComponent } from "vue";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";
import router from "@/router";
import cyberpunkCoder from "@/assets/images/cyberpunkCoder.jpg";
import city from "@/assets/images/city.png";
import grass from "@/assets/images/grass.png";
import cloud from "@/assets/images/cloud.jpg";

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
        currentNavBarIndex.value = -1;
        router.push({ name: "NotFound" });
      }
    };

    const getHeaderImg = (currentNavBarIndex: number) => {
      return navBarList[currentNavBarIndex]?.headerImg ?? cloud;
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
            src={getHeaderImg(currentNavBarIndex.value)}
            class={styles.headerImg}
          ></img>
        </>
      );
    };
  },
});
