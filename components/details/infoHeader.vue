<script setup>
import { inject } from 'vue'

const project = inject('project')
const props = defineProps(['title'])
</script>
<template>
    <p class="mt-4 text-xs">
        Web Development
    </p>
    <p class="mt-4 d text-2xl uppercase project-title">
        {{ props.title }}
    </p>
</template>

<style scoped>
.project-title {
    color: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>