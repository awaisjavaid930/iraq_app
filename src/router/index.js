import {
    createRouter,
    createWebHistory
} from 'vue-router'
import NavbarView from '../components/NavbarView.vue'
import RegiserForm from '../views/auth/RegisterForm.vue'
import LoginForm from '../views/auth/LoginForm.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'

const routes = [
 
    {
        path: '',
        component: NavbarView,
        children: [
            {
                path: 'register',
                component: RegiserForm,
            },
            {
                path: 'login',
                component: LoginForm,
            },
            {
                path: 'dashboard',
                component: DashboardView,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router