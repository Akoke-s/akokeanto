import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})


router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    document.title = 'Akoke Victor Anto - ' + to.meta.name;
    next()
})

export default router