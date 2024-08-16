<script setup>
import { inject } from 'vue'
import stackSvg from '@/components/shared/svgs/stackSvg.vue';
import linkSvg from '@/components/shared/svgs/linkSvg.vue'

const project = inject('project')
const props = defineProps(['singleProject'])
</script>
<template>
    <div class="sm:flex sm:items-center gap-[100px] mt-4">
        <div class="text-center sm:text-left max-w-5xl">
            <h1 class="mt-1.5 text-sm font-bold text-gray-900">
                {{ props?.singleProject?.description }}
            </h1>
            <h1 class="mt-10 text-sm font-bold text-gray-900">
                Technologies
            </h1>
            <p class="font-medium mt-1.5 mb-1.5">
                <stackSvg />
                {{ props?.singleProject?.stack.join(', ') }}
            </p>
            <p class="font-medium">
                <linkSvg />
                <a class="text-indigo-500" target="_blank" :href="props?.singleProject?.link ? props?.singleProject?.link : '#'">{{ props?.singleProject?.link ? props?.singleProject?.link : 'Link not available at the moment'  }}</a>
            </p>
        </div>
    </div>
</template>