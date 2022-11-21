import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import('../views/Welcome.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/task',
        name: 'task',
        component: () => import('../views/Task.vue')
    },
    {
        path: '/terminosycondiciones',
        name: 'terms',
        component: () => import('../views/TerminosYCondiciones.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    
})


export default router;