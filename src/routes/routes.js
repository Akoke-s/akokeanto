
export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: [
            { name: 'Software Developer from Lagos, Nigeria' },
            { name: 'description', content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria." },
            { name: "twitter:card", content: "summary"},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: "twitter:site", content: "@Iam_Veecktor"},
            { name: "twitter:creator", content: "@Iam_Veecktor"},
            { name: "og:title", content: "Akoke Victor Anto - Software Developer based in Lagos, Nigeria"},
            { name: "og:description", content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria."}
        ],
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: [
            { name: 'Software Developer from Lagos, Nigeria' },
            { name: 'description', content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria." },
            { name: "twitter:card", content: "summary"},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: "twitter:site", content: "@Iam_Veecktor"},
            { name: "twitter:creator", content: "@Iam_Veecktor"},
            { name: "og:title", content: "Akoke Victor Anto - Software Developer based in Lagos, Nigeria"},
            { name: "og:description", content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria."}
        ],
    },
    {
        path: '/details/:slug',
        name: 'details',
        component: () => import('@/views/DetailsView.vue'),
        meta: [
            { name: 'Software Developer from Lagos, Nigeria' },
            { name: 'description', content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria." },
            { name: "twitter:card", content: "summary"},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: "twitter:site", content: "@Iam_Veecktor"},
            { name: "twitter:creator", content: "@Iam_Veecktor"},
            { name: "og:title", content: "Akoke Victor Anto - Software Developer based in Lagos, Nigeria"},
            { name: "og:description", content: "Hi, my name is Akoke Victor Anto. I'm a software developer based in Lagos, Nigeria."}
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue'),
        meta: {
            name: '404 Not Found'
        }
    }
]