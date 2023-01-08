import { useInterfaceStore } from "../../store";

export default defineComponent({
  setup() {
    const interfaceStore = useInterfaceStore();
    return () => {
      return <h1>{JSON.stringify(interfaceStore)}</h1>;
    };
  },
});
