<script setup>
import leftArrowSvg from '@/components/shared/svgs/leftArrowSvg.vue'
import rightArrowSvg from '@/components/shared/svgs/rightArrowSvg.vue'

/*global defineProps*/
/*eslint no-undef: "error"*/

// eslint-disable-next-line no-unused-vars
const props = defineProps(['project']) 
</script>
<template>
    <div class="flex items-center justify-center pagination mx-auto shadow-md mt-8">
        <router-link 
            :to="`/details/${project?.slug}`" 
            class="px-4 py-2 mx-1 text-gray-800 capitalize bg-white hover:bg-gray-100" 
            @click="$emit('previousPage')"
        >
            <div class="flex items-center -mx-1">
                <leftArrowSvg class="mx-1 rtl:-scale-x-100" />
                <span class="mx-1">
                    previous project
                </span>
            </div>
        </router-link>
        <router-link 
            :to="`/details/${project?.slug}`"  
            class="px-4 py-2 mx-1 text-gray-800 bg-white hover:bg-gray-100" 
            @click="$emit('nextPage')"
        >
            <div class="flex items-center -mx-1">
                <span class="mx-1">
                    Next Project
                </span>
                <rightArrowSvg class="mx-1 rtl:-scale-x-100" />
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.pagination {
    width: 340px;
    height: 87px;
    margin-top: 20px !important;
}
</style>