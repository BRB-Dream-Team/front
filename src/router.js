import { createRouter, createWebHistory } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
import Sign_In from "./components/Sign_In.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: MainContainer },
        { path: '/signup', component: Sign_In }
    ]
})