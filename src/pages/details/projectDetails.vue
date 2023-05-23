<script setup>
import stackSvg from '@/components/shared/svgs/stackSvg.vue';
import linkSvg from '@/components/shared/svgs/linkSvg.vue'
import leftArrowSvg from '@/components/shared/svgs/leftArrowSvg.vue'
import rightArrowSvg from '@/components/shared/svgs/rightArrowSvg.vue'
</script>

<template>
    <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
        
        <div class="leading-relaxed text-gray-800 mb-6">
            <p class="mt-4 text-xs">
                Web Development
            </p>
            <p class="mt-4 d text-2xl uppercase project-title">
                Flight Local (B2B Travel Solution)
            </p>
            
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

            <div class="p-5 md:p-10 bg-blue-900 text-white w-full rounded-lg shadow-lg mb-8 mt-8">
                <img src="https://s3-alpha-sig.figma.com/img/c95d/ec89/16e4fde7e6c393a8dc64b671edaae938?Expires=1685923200&Signature=PRbCHAothBaoshUiRjnVF9Ra04pzar~EaZtR3QBuSN8tWIqXkglMyO5kvCdafxmBjmBQ3d0Y000bTs8Rkj4v0esj2LAvxT805ru0gYcXtzpRjLsvfzmsrgpKu9QIqdQav3KJgRguL30hSPTKZ3-FY2WbC-6eAEc30E9c07xsvys82NuYiWBG66-hr6LyiFcsA~Wa2wT4JFLY4rmCRbgD7SVFl1-aNMNARG74LxTLXbShJF0h4bQMYedrVFIdoX9Om3kEMRXnjMf8O44khgpz04avgZu4eHHVQwHyDVN19OkwInS3ZXVqPxEBFDhCbIdmX6Wp~vKOf6Yr-cvagpS2Hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" class="mb-4" align="InstantEnergy">
                <img src="https://s3-alpha-sig.figma.com/img/9805/051c/bcfb80d50cf34da99d679a1b39766a6e?Expires=1685923200&Signature=KzV00V~7q~U40rFNfogDIzn4nUsc0g3zq-KoXizOTHrH2J3rxq-AruUR6u128V6~4MM5Bk5RPRTV2nsBsDjFZRaU7go6~jDP34Jva~Lvv6DqUXxvYP3gQp8XnrXt2H5~w4-s0nQuyDFLKcHOz1XRkGjkCdrIfyG0Oi1ssEH7Of22LwklGMeBcAsnjMF6EtkmLQXV8ldpyXHAV5MDLaNfmZkyzulN2nUoyB3kzCSQ6Sg0UUlOddoiRbjg7Yx94oyo1M9f~jAKJ4tArsWE6qfrbBT5rSymKrK4IsDUssfCGyX5Whre7sFoHF1qDx1I2yschRVaqXJbd7iPEbaaGvvQSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" class="shadow-lg mb-4" align="InstantEnergy">
            </div>
        </div>

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
                        Next project
                    </span>
                    <rightArrowSvg class="mx-1 rtl:-scale-x-100" />
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.project-title {
    color: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.pagination {
    width: 340px;
    height: 87px;
    margin-top: 20px !important;
}
</style>