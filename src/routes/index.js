import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { getProjects } from '@/projects'
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


router.beforeResolve(async to => {
    if (to.path === '/') {
        to.meta.projects = await getProjects()
        console.log("let me see something: " + to.meta.projects)
    }
})

router.beforeEach((to, from, next) => {
    // window.scrollTo(0, 0)
    document.title = 'Akoke Victor Anto - ' + to.meta.name;
    next()
})

export default router