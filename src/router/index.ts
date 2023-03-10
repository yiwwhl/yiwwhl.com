import { createRouter, createWebHashHistory } from "vue-router";
import { DEFAULT_LAYOUT } from "./base";
import { moduleRoutes } from "./routes";
import { useTitleWithDefault } from "@/hooks/interface";

const router = createRouter({
  history: createWebHashHistory(),
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
          path: "/homepage",
          name: "HomePage",
          component: () => import("@/views/HomePage/index"),
          meta: {
            locale: "首页",
          },
        },
        {
          path: "/404",
          name: "NotFound",
          component: () => import("@/views/NotFound/index"),
          meta: {
            locale: "找不到页面",
          },
        },
      ],
    },
    ...moduleRoutes,
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

router.beforeEach(({ meta: { locale } }) => {
  useTitleWithDefault(locale as string);
});

export default router;
