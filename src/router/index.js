import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ]
});

export default router;
