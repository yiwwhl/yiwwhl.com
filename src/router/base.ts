import { REDIRECT_ROUTE_NAME } from "@/router/constants";
import { RouteRecordRaw } from "vue-router";

export const DEFAULT_LAYOUT = () => import("@/layout/DefaultLayout");

export const REDIRECT_MAIN: RouteRecordRaw = {
  path: "/redirect",
  name: "redirectWrapper",
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    hideInMenu: true,
  },
  children: [
    {
      path: "/redirect/:path",
      name: REDIRECT_ROUTE_NAME,
      component: () => import("@/views/Redirect/index"),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "notFound",
  component: () => import("@/views/NotFound/index"),
};
