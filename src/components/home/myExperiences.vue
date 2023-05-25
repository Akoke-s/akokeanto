<script setup>
import AppAccordion from '../shared/AppAccordion.vue';
import experiencesData from '../../resources/experiences.json'
import AccordionContent from '../shared/AccordionContent.vue';


</script>

<template>
    <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <p class="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-4xl text-white uppercase">
            professional 
        </p>
        <p class="mx-auto max-w-4xl text-center leading-relaxed text-4xl text-white uppercase">
            Experience 
        </p>

        <AppAccordion :items="experiencesData?.experiences">
            <div class="">
                <AccordionContent />
            </div>
        </AppAccordion>
    </div>
</template>