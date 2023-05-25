
export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            name: "Software Developer from Lagos, Nigeria",
            projects: {}
        },
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: {
            name: "Contact Me",
        }
    },
    {
        path: '/details/:slug',
        name: 'details',
        component: () => import('@/views/DetailsView.vue'),
        meta: {
            name: "Detail page"
        }
    }
]