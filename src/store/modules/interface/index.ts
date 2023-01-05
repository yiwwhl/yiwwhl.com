import { defineStore } from "pinia";
import {
  baseInterfaceInfo,
  BaseInterfaceInfo,
} from "../../../services/interface";

const useInterfaceStore = defineStore("interface", {
  state: (): BaseInterfaceInfo => ({ ...baseInterfaceInfo }),
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});

export default useInterfaceStore;
