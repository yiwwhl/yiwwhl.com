import { useInterfaceStore } from "../../store";

export default defineComponent({
  setup() {
    const interfaceStore = useInterfaceStore();
    const content = () => {
      return (
        <a-button
          style={{ marginLeft: "20px", marginTop: "20px" }}
          type="primary"
          onClick={() => alert("hey")}
        >
          Primary
        </a-button>
      );
    };
    return () => {
      return content();
    };
  },
});
