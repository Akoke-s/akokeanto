<script setup>
import mapPin from '../shared/svgs/mapPin.vue';
import visitLink from '../shared/svgs/visitLink.vue';
/*global defineProps*/
/*eslint no-undef: "error"*/

// eslint-disable-next-line no-unused-vars
const props = defineProps(['item']) 

</script>

<template>
    <Transition>
        <div class="relative overflow-hidden transition-all duration-700">
            <div class="flex gap-2">
                <div class="flex items-center px-8 gap-4">
                    <mapPin />
                    <p>{{ item?.city }}, {{ item?.country }}</p>
                </div>
                <a :href="item.link" target="_blank" class="flex items-center px-8 gap-4">
                    <visitLink />
                    <p>{{ item?.link }}</p>
                </a>
            </div>
            <p class="p-8 text-lg text-blue-700">
                {{ item?.description }}
            </p>
        </div>
        
    </Transition>
</template>

