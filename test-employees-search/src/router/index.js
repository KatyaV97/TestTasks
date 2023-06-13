import { createRouter, createWebHistory } from 'vue-router'
import UserCard from '@/components/UserCard.vue'

const routes = [
    {
        path: '/',
        component: UserCard
    },
];

const router = createRouter({    
    routes,
    history: createWebHistory(/*process.env.BASE_URL*/)
});

export default router;