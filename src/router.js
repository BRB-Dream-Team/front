import { createRouter, createWebHistory } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
import Sign_In from "./components/Sign_In.vue";
import Trans from "./components/Trans.vue";
import User from "./views/User.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: MainContainer },
    { path: "/signup", component: Sign_In },
    { path: "/trans", component: Trans },
    { path: "/user/:id", component: User },
  ],
});
