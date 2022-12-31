/**
 * Interface Control hooks
 */

import { useTitle } from "@vueuse/core";

export function useTitleWithDefault(currentPageName: string = "HomePage") {
  const title = useTitle();
  title.value = `${currentPageName} - Yiwwhl`;
}
