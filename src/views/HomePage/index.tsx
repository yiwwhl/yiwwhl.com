import { useInterfaceStore } from "../../store";
import styles from "./index.module.scss";
import cyberpunkCoder from "@/assets/images/cyberpunkCoder.jpg";

export default defineComponent({
  setup() {
    const interfaceStore = useInterfaceStore();
    const content = () => {
      return (
        <div>
          <img src={cyberpunkCoder} class={styles.headerImage}></img>
          <h1 style={{ marginLeft: "400px" }}>Welcome</h1>
        </div>
      );
    };
    return () => {
      return content();
    };
  },
});
