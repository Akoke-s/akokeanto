<script setup>
import { inject } from 'vue'
import stackSvg from '@/components/shared/svgs/stackSvg.vue';
import linkSvg from '@/components/shared/svgs/linkSvg.vue'

const project = inject('project')

</script>
<template>
    <div class="sm:flex sm:items-center gap-[100px] mt-4">
        <div class="text-center sm:text-left max-w-5xl">
            <h1 class="mt-1.5 text-sm font-bold text-gray-900">
                Flight Local is a rapidly growing Bangladesh based company who dominates the online travel & tourism trade. They offer prompt visa service, varieties of ticketing options, multiple lists for short & long holiday plans, group tour packages, endless hotel lists as per requirements.
            </h1>
            <h1 class="mt-10 text-sm font-bold text-gray-900">
                Technologies
            </h1>
            <p class="font-medium mt-1.5 mb-1.5">
                <stackSvg />
                {{ project?.stack.join(', ') }}
            </p>
            <p class="font-medium">
                <linkSvg />
                <a target="_blank" :href="project?.link ? project?.link : '#'">{{ project?.link ? project?.link : 'Link not available at the moment'  }}</a>
            </p>
        </div>
    </div>
</template>