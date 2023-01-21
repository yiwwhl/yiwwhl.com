import { createRouter, createWebHistory } from "vue-router";
import { DEFAULT_LAYOUT } from "./base";
import { moduleRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DEFAULT_LAYOUT,
      meta: {
        locale: "首页",
        order: 0,
      },
      redirect: {
        name: "HomePage",
      },
      children: [
        {
          path: "homepage",
          name: "HomePage",
          component: () => import("@/views/HomePage/index"),
          meta: {
            locale: "首页",
            requiresAuth: true,
          },
        },
      ],
    },
    ...moduleRoutes,
  ],
});

export default router;
