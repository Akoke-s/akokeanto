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
            title: 'Software Developer based in Lagos, Nigeria - Akoke Victor Anto',
            meta: [
                { name: 'description', content: "Hi, my name is Akoke Victor Anto. I\'m a Software developer based in Lagos, Nigeria." },
                { name: "twitter:card", content: "summary"},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: "twitter:site", content: "@Iam_Veecktor"},
                { name: "twitter:creator", content: "@Iam_Veecktor"},
                { hid: 'og:title', name: "og:title", content: "Akoke Victor Anto - Software Developer based in Lagos, Nigeria"},
                { hid: 'og-type', property: 'og:type', content: 'website' },
                { hid: 'og:url', name: "og:url", content: "https://akokeanto.vercel.app/"},
                { hid: 'og:image', name: "og:image", content: "@/assets/avi.jpg"},
                { hid: 'og:description', name: "og:description", content: "Hi, my name is Akoke Victor Anto. I\'m a Software developer based in Lagos, Nigeria."},
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