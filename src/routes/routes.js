
export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            name: "Software Developer from Lagos, Nigeria",
        },
    }
]