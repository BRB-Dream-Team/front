import { createRouter, createWebHashHistory } from "vue-router";
import MainContainer from "./components/MainContainer.vue";
import Sign_In from "./components/Sign_In.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/main', component: MainContainer },
        { path: '/si', component: Sign_In }
    ]
})