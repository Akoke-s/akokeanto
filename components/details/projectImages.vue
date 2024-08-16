<script setup>
const props = defineProps(['project'])
</script>

<template>
    <div class="p-5 md:p-10 text-white w-full rounded-lg shadow-lg mb-8 mt-8" :class="props?.project.color" v-if="props?.project?.images.length">
        <img v-for="(image, idx) in props?.project?.images" :key="idx" :src="image" class="mb-4" align="InstantEnergy" :alt="image">
    </div>
</template>