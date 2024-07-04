import { createRouter, createWebHistory } from 'vue-router'

import Main from "../pages/MainPage.vue";
import CatalogPage from "../pages/CatalogPage.vue";
import CardPage from "../pages/CardPage.vue";
import NotFound from "../components/NotFound.vue";



const routes = [
    {
        name: 'main',
        path: '/',
        component: Main
    },
    {
        name: 'catalog',
        path: '/catalog',
        component: CatalogPage
    },
    {
        path: '/catalog/:id',
        component: CardPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: Main,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                left: 0,
                top: 110,
                behavior: 'smooth'
            }
        }
    }
})
export default router