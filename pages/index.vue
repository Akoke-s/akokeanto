<script>
import { defineComponent } from 'vue'
import homePage from '@/components/views/homePage.vue';

export default defineComponent({
    layout: 'default',
    components: {
        homePage
    },
    setup() {
        useHead({
            title: 'Fullstack Developer and mentor - Akoke Victor Anto',
            meta: [
                { name: 'description', content: "Hi, my name is Akoke Victor Anto. I\'m a Fullstack developer and mentor." },
                { name: "twitter:card", content: "summary"},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: "twitter:site", content: "@Iam_Veecktor"},
                { name: "twitter:creator", content: "@Iam_Veecktor"},
                { hid: 'og:title', name: "og:title", content: "Akoke Victor Anto - Fullstack Developer and mentor"},
                { hid: 'og-type', property: 'og:type', content: 'website' },
                { hid: 'og:url', name: "og:url", content: "https://akokeanto.vercel.app/"},
                { hid: 'og:image', name: "og:image", content: "/avi.png"},
                { hid: 'og:description', name: "og:description", content: "Hi, my name is Akoke Victor Anto. I\'m a Fullstack developer and mentor."},
            ]
        })
    },
});
</script>

<template>
    <div>
        <homePage />
    </div>
</template>