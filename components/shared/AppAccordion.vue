<script setup>
import closeSvg from '@/components/shared/svgs/closeSvg.vue';
import plusSvg from '@/components/shared/svgs/plusSvg.vue';
import AccordionContent from '@/components/shared/AccordionContent.vue';
import { ref } from 'vue';

/*global defineProps*/
/*eslint no-undef: "error"*/

// eslint-disable-next-line no-unused-vars
const props = defineProps(['items']) 

const visible = ref(null)

// eslint-disable-next-line no-unused-vars
const toggleAccordion = (id) => {
    visible.value = visible.value !== id ? id : null
}
</script>

<template>
    <div class="mt-2 space-y-8" v-for="(item, idx) in items" :key="idx">
        <div class="bg-gray-100 rounded-lg text-blue-700">
            <button class="flex items-center justify-between w-full p-8" @click.prevent="toggleAccordion(item?.id)">
                <h1 class="font-semibold text-2xl">{{ item?.title }} - {{ item?.company }}</h1>

                <span class="text-blue-700">
                    <closeSvg v-if="visible && visible === item?.id" />
                    <plusSvg v-else />
                </span>
            </button>

            <div v-if="visible === item?.id">
                <AccordionContent :item="item" />
            </div>
            
        </div>
    </div>
</template>