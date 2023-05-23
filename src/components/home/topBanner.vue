<script setup>
import doubleChevron from '../shared/svgs/doubleChevron.vue';
</script>
<template>
    <div class="container px-6 py-16 mx-auto text-center h-screen">
        <div class="max-w-lg mx-auto">
            <h1 class="text-5xl font-bold text-gray-800 lg:text-4xl">Full Stack Developer & Mentor</h1>
            <p class="mt-4 text-gray-800 text-sm">I enjoy what I do and create elegantly simple things using code.</p>
        </div>

        <div class="flex justify-center mt-20">
            <img class="object-cover rounded-full h-80 w-80" src="https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
        </div>

        <div class="flex justify-center xs:hidden mt-16 lg:mt-24 md:mt-16">
            <doubleChevron class="border border-gray-700 rounded-xl scroll-down-arrows" />
        </div>
    </div>
</template>

<style scoped>
    .scroll-down-arrows {
        width: 27px;
        height: 51px;
    }
</style>