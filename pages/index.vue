<script>
import { defineComponent } from 'vue'
import homePage from '@/components/views/homePage.vue';

export default defineComponent({
    layout: 'default',
    components: {
        homePage
    }
});
</script>

<template>
    <div>
        <homePage />
    </div>
</template>