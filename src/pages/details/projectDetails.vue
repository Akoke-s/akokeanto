<script setup>
import { ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import projectPagination from '@/components/shared/projectPagination.vue';
import projectOverview from '@/pages/details/projectOverview.vue';
import projectImages from '@/pages/details/projectImages.vue';
import infoHeader from '@/pages/details/infoHeader.vue';
import projectsData from '../../projetcs/projects.json'

const route = useRoute();
const project = ref({})

project.value = projectsData?.projects.find(project => project.slug === route.params.slug)

provide('project', project?.value)

</script>

<template>
    <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
        
        <div class="leading-relaxed text-gray-800 mb-6">
            <infoHeader />
            
            <projectOverview />

            <projectImages />
        </div>

        <projectPagination />
    </div>
</template>
