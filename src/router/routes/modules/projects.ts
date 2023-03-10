import { DEFAULT_LAYOUT } from "@/router/base";

const Projects = {
  path: "/projects",
  name: "Projects",
  component: DEFAULT_LAYOUT,
  redirect: {
    name: "ProjectsList",
  },
  children: [
    {
      path: "/list",
      name: "ProjectsList",
      meta: {
        locale: "项目列表",
      },
      component: () => import("@/views/Projects/List/index"),
    },
  ],
};

export default Projects;
