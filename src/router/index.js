import { createRouter, createWebHistory } from "vue-router";
import Detail from '../pages/Detail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ]
});

export default router;
