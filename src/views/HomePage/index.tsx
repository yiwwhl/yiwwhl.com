import { useInterfaceStore } from "../../store";
import styles from "./index.module.scss";

export default defineComponent({
  setup() {
    const interfaceStore = useInterfaceStore();
    const content = () => {
      return (
        <div>
          <h1 style={{ marginLeft: "400px" }}>Welcome</h1>
        </div>
      );
    };
    return () => {
      return content();
    };
  },
});
