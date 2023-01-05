import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import useInterfaceStore from "./modules/interface";

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export { useInterfaceStore };
export default pinia;
