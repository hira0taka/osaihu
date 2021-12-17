import { createRouter,createWebHistory } from 'vue-router'
import Bop from './components/Bop.vue'
import Setting from './components/Setting.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'bop',
            component: Bop
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        }
    ]
})