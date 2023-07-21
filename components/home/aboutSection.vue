<script setup>
import codeSvg from '@/components/shared/svgs/codeSvg.vue';
import bookSvg from '@/components/shared/svgs/bookSvg.vue';
import aboutData from '@/utils/about.json';
import { ref } from 'vue';

const about = ref({})

about.value = aboutData?.me

</script>

<template>
    <div class="bg-blue-700 mb-6" id="about">
        <div class="text-white mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-white text-2xl">
                Hello, I am Anto. Nice meeting you.
            </p>
            <div class="mx-auto mt-4 max-w-7xl text-center leading-leading text-white leading-7 mt-8">
                <p class="">
                    Back in 2015, I obtained a degree in Computer Science due to my curiosity about how the web works. Fast-forward to today and I’ve had the privilege of building web applications for start-ups including a Neo-global bank, a HR firm and an Ecommerce company.
                </p>

                <p class="">These days I’m focused on building products for OurPass Inc, mentoring and personal development. I mostly use Laravel, Vuejs, Tailwind CSS, Nuxtjs, Quasar Framework and Inertiajs. Working in a fast-paced industry made me enjoy learning. It also make me strive to be better at life in general.</p>
                <p class="">When I’m not writing code, I usually take pleasure walks, play video games, hang out with friends, read tech blog posts or learn a new concept  about Vuejs/Laravel.</p>

            </div>

            
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-8">
                    <div class="flex justify-center">
                        <a
                            class="flex transform transition duration-500 hover:scale-110 about-cards flex-col items-center justify-center rounded-xl border rounded-md bg-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                            href=""
                        >
                            <div class="svg-bg inline-block rounded-full bg-blue-600 p-10">
                                <codeSvg class="text-gray-800" />
                            </div>
                            

                            <h3 class="mt-3 text-lg font-extrabold text-gray-800 sm:text-xl">
                                Full Stack
                            </h3>

                            <p class="mt-4 text-xs text-gray-800 text-center">
                                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                            </p>

                            <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                                Languages I understand:
                            </h3>

                            <p class="mt-4 text-xs text-gray-800">
                                PHP, Ruby**, Javascript, Node*
                            </p>

                            <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                                Frameworks &amp; Libraries:
                            </h3>

                            <p class="mt-4 text-xs text-gray-800">
                                Laravel, Vue, Nuxt, React*, Inertia*, Alpine*, Lumen, Ruby on Rails**
                            </p>

                            <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                                API Specs:
                            </h3>

                            <p class="mt-4 text-xs text-gray-800">
                                RESTful, GraphQL
                            </p>

                            <p class="mt-8 text-xs text-gray-800" style="font-size: 10px;">
                                Items marked with * are tools I've used to build stuff that never made it to production. However, I am totally comfortable working with them! While items marked with ** are tools I am currently learning to use
                            </p>
                        </a>
                    </div>
                    <div class="flex justify-center">
                        <a
                            class="flex transform transition duration-500 hover:scale-110 about-cards flex-col items-center justify-center rounded-xl border rounded-md bg-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                            href=""
                        >
                            <div class="svg-bg inline-block rounded-full bg-blue-600 p-10">
                                <bookSvg class="text-gray-800" />
                            </div>
                            

                            <h3 class="mt-3 text-lg font-extrabold text-gray-800 sm:text-xl">
                                Mentorship
                            </h3>

                            <p class="mt-4 text-xs text-gray-800 text-center">
                                I genuinely care about people, and love helping fellow Developers work on their craft.
                            </p>

                            <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                                Area:
                            </h3>

                            <p class="mt-4 text-xs text-gray-800">
                                Frontend Development, Backend Development, Collaboration
                            </p>

                            <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                                Mentorship Stats:
                            </h3>

                            <p class="mt-4 text-xs text-gray-800">
                                1+ Year(s)
                            </p>
                            <p class="mt-4 text-xs text-gray-800">
                                20+ Mentees
                            </p>
                            <p class="mt-4 text-xs text-gray-800">
                            1000+ Mentorship Hours.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.svg-bg {
    background: #A9D6FF;
}

.about-cards {
    width: 488px;
}
</style>