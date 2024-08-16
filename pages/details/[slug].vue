<script setup>
import projectDetails from '@/components/details/projectDetails.vue';

const route = useRoute();

const { data, pending, error } = await useAsyncData('', () => queryContent().where({ slug: route.params.slug }).findOne())

console.table(data.value)

</script>

<template>
    <div>
        <projectDetails :work="data.value" />
    </div>
</template>