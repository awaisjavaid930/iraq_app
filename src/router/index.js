import {
    createRouter,
    createWebHistory
} from 'vue-router'
import NavbarView from '../components/NavbarView.vue'
import RegiserForm from '../views/auth/RegisterForm.vue'
import LoginForm from '../views/auth/LoginForm.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import CategoryList from '../views/category/CategoryList.vue'
import CategoryCreate from '../views/category/CategoryCreate.vue'
import ProductList from '../views/product/ProductList.vue'
import ProductCreate from '../views/product/ProductCreate.vue'


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
            {
                path: 'category',
                component: CategoryList,
            },
            {
                path: 'category/create',
                component: CategoryCreate,
            },
            {
                path: 'product',
                component: ProductList,
            },
            {
                path: 'product/create',
                component: ProductCreate,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router