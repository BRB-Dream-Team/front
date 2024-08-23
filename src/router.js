import { createRouter, createWebHashHistory } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
import Sign_In from "./components/Sign_In.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: MainContainer },
        { path: '/signup', component: Sign_In }
    ]
})