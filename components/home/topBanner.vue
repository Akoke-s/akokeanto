<script setup>
import doubleChevron from '../shared/svgs/doubleChevron.vue';
</script>
<template>
    <div class="container px-6 py-16 mx-auto text-center h-screen">
        <div class="max-w-xl mx-auto">
            <h1 class="text-5xl font-bold text-gray-800 lg:text-4xl">Full Stack Developer & Mentor</h1>
            <p class="mt-4 text-gray-800 text-sm">I enjoy what I do and create elegantly simple things using code.</p>
        </div>

        <div class="flex justify-center mt-20 xl:mt-32">
            <img class="object-cover rounded-full h-80 w-80 grayscale" src="@/assets/port2.jpg" alt="akoke-anto" />
        </div>

        <nuxt-link 
            to="/#about"
            class="flex justify-center xs:hidden mt-12 lg:mt-16 md:mt-12 xl:mt-72"
        >
            <doubleChevron class="border border-gray-700 cursor-pointer rounded-xl scroll-down-arrows" />
        </nuxt-link>
    </div>
</template>

<style scoped>
    .scroll-down-arrows {
        width: 27px;
        height: 51px;
    }
</style>