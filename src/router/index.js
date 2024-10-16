import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/Auth.vue"),
      children: [
        {
          path: "signup",
          name: "signup",
          component: () => import("../views/Signup.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("../views/Login.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
  ],
});

export default router;
