import { createRouter,createWebHistory } from 'vue-router'
import Pay from './components/Pay.vue'
import Bop from './components/Bop.vue'
import Setting from './components/Setting.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/pay',
            name: 'pay',
            component: Pay
        },
        {
            path: '/bop',
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