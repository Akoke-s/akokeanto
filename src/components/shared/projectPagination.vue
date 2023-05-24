<script setup>
import leftArrowSvg from '@/components/shared/svgs/leftArrowSvg.vue'
import rightArrowSvg from '@/components/shared/svgs/rightArrowSvg.vue'
</script>
<template>
    <div class="flex items-center justify-center pagination mx-auto shadow-md mt-8">
        <a href="#" class="px-4 py-2 mx-1 text-gray-800 capitalize bg-white">
            <div class="flex items-center -mx-1">
                <leftArrowSvg class="mx-1 rtl:-scale-x-100" />
                <span class="mx-1">
                    previous project
                </span>
            </div>
        </a>
        <a href="#" class="px-4 py-2 mx-1 text-gray-800 bg-white">
            <div class="flex items-center -mx-1">
                <span class="mx-1">
                    Next Project
                </span>
                <rightArrowSvg class="mx-1 rtl:-scale-x-100" />
            </div>
        </a>
    </div>
</template>

<style scoped>
.pagination {
    width: 340px;
    height: 87px;
    margin-top: 20px !important;
}
</style>