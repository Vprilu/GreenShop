import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { createHead } from "@unhead/vue";
const head = createHead();
createApp(App).use(router).use(head).mount("#app");
