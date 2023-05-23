<script setup>
import stackSvg from '@/components/shared/svgs/stackSvg.vue';
import linkSvg from '@/components/shared/svgs/linkSvg.vue'
</script>
<template>
    <div class="sm:flex sm:items-center gap-[100px] mt-4">
        <div class="text-center sm:text-left max-w-xl">
            <h1 class="mt-1.5 text-sm font-bold text-gray-900">
                Flight Local is a rapidly growing Bangladesh based company who dominates the online travel & tourism trade. They offer prompt visa service, varieties of ticketing options, multiple lists for short & long holiday plans, group tour packages, endless hotel lists as per requirements.
            </h1>
            <h1 class="mt-10 text-sm font-bold text-gray-900">
                Technologies
            </h1>
            <p class="font-medium mt-1.5 mb-1.5">
                <stackSvg />
                Vue.Js, Laravel, GraphQL
            </p>
            <p class="font-medium">
                <linkSvg />
                Link not available at the moment
            </p>
        </div>
    </div>
</template>