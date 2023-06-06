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
                { name: "og:title", content: "Akoke Victor Anto - Software Developer based in Lagos, Nigeria"},
                { name: "og:description", content: "Hi, my name is Akoke Victor Anto. I\'m a Software developer based in Lagos, Nigeria."},
                { name: "og:image", content: "https://www.gravatar.com/avatar/a85051d369a9ee1131d28d56ec04fc17"}
            ]
        })
    }
});
</script>

<template>
    <div>
        <homePage />
    </div>
</template>