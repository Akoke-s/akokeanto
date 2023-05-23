<script setup>
import mapPin from '../shared/svgs/mapPin.vue';
import visitLink from '../shared/svgs/visitLink.vue';
import closeSvg from '../shared/svgs/closeSvg.vue';
import plusSvg from '../shared/svgs/plusSvg.vue';
import { ref } from 'vue';

const openTab = ref(false)
</script>

<template>
    <div class="bg-blue-700 mb-6 pb-12">
        <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <p class="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-4xl text-white uppercase">
                professional 
            </p>
            <p class="mx-auto max-w-4xl text-center leading-relaxed text-4xl text-white uppercase">
                Experience 
            </p>

            <div class="mt-12 space-y-8">
                <div class="bg-gray-100 rounded-lg text-blue-700">
                    <button class="flex items-center justify-between w-full p-8" @click="openTab = !openTab">
                        <h1 class="font-semibold text-2xl">Frontend Developer - OurPass</h1>

                        <span class="text-blue-700">
                            <closeSvg v-if="openTab" />
                            <plusSvg v-else/>
                        </span>
                    </button>

                    <div v-if="openTab" class="overflow-hidden duration-500 transition-all">
                        <div class="flex gap-2">
                            <div class="flex items-center px-8 gap-4">
                                <mapPin />
                                <p>Lagos, Nigeria</p>
                            </div>
                            <div class="flex items-center px-8 gap-4">
                                <visitLink />
                                <p>www.ourpass.com</p>
                            </div>
                        </div>
                        <p class="p-8 text-lg text-blue-700">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                        </p>
                    </div>
                    
                </div>
            </div>
            <div class="mt-2 space-y-8">
                <div class="bg-gray-100 rounded-lg text-blue-700">
                    <button class="flex items-center justify-between w-full p-8" @click="openTab = !openTab">
                        <h1 class="font-semibold text-2xl">Frontend Developer - OurPass</h1>

                        <span class="text-blue-700">
                            <closeSvg v-if="openTab" />
                            <plusSvg v-else/>
                        </span>
                    </button>

                    <div v-if="openTab" class="overflow-hidden duration-500 transition-all">
                        <div class="flex gap-2">
                            <div class="flex items-center px-8 gap-4">
                                <mapPin />
                                <p>Lagos, Nigeria</p>
                            </div>
                            <div class="flex items-center px-8 gap-4">
                                <visitLink />
                                <p>www.ourpass.com</p>
                            </div>
                        </div>
                        <p class="p-8 text-lg text-blue-700">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>