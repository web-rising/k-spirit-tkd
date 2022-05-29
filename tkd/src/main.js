import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import prismic from "./prismic";
import store from "./store";
import "./assets/base.css";

createApp(App).use(router).use(prismic).use(store).mount("#app");