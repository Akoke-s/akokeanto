<script setup>
import { ref } from 'vue';
import visitLink from '@/components/shared/svgs/visitLink.vue';
import pauseIcon from '@/components/shared/svgs/pauseSvg.vue';
// import projectsData from '@/utils/projects.json'
// const newProjects = ref([])
const works = ref([])
// newProjects.value = projectsData?.projects
const { data, pending, error } = await useAsyncData('', () => queryContent().find())
works.value = data.value
</script>


<template>
    <div class="bg-white mb-6" id="works">
        <section class="bg-white mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8" v-if="pending">
            <div class="container px-6 py-10 animate-pulse">
                <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="w-full ">
                        <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </section>
        <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8" v-else>
            <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-4xl">
                My Works
            </p>

            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8">
                <div class="h-fit group flex justify-center" v-for="(project, idx) in works" :key="idx">
                    <!-- {{ project }} -->
                    <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            :alt="project.slug"
                            :src="project?.featuredImage"
                            class="h-56 w-full object-cover"
                            v-if="project?.featuredImage != null"
                        />
                        <img
                            :alt="project.slug"
                            src="https://s3-alpha-sig.figma.com/img/4ea1/2e3b/593753e5974a819f4c21db6438adfd86?Expires=1685923200&Signature=WNrpqjknJimcklHLo6k5kFRPr9b-wA0si0Iy5pzQG6DlhR3DovMvzFl4P-3Okszq7UkYH5OvlSmjbVEkjKCg4HKIV8HedZZhmPHMvitrszKfMFrZWGJhN2QA~EyHFUU~GFtDGmC6LE2LwD9BbRdrEDWzCSIGcam03Vvop4cdKp59K15-LJZDIiL0aXhtFqqL1C2T4MMORxsbAygN1IkWzyNiCxi~1o8PRyA3H38aOD4eF3IxfQ9JOJTxEHXoKEk3NLM2TUo1YLEpqvOAg~Mh7wfF7IPjAqUwkQa0V1ZnJeKRF08Ypwvjf9241asPIor0XSIK~F2bvc8Ion1hn6CzyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            class="h-56 w-full object-cover"
                            v-else
                        />
                        <div class="absolute h-full w-full px-4 bg-blue-950 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <p class="text-lg text-white mb-4">
                                {{ project?.title }}
                            </p>
                            <a
                                :href="`${project.link}`"
                                class="border border-blue-700 bg-transparent text-white py-2 px-5 rounded-lg cursor-pointer flex items-center text-center gap-2"
                                v-if="project.status === 'active'"
                                target="_blank"
                            >
                                <p>
                                    <visitLink />
                                </p>
                                <p>View details</p>
                            </a>
                            <div
                                class="border border-red-200 bg-red-200 text-white py-2 px-5 rounded-lg cursor-pointer flex items-center text-center gap-2"
                                v-else
                            >
                                <pauseIcon />
                                <p>On hold</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>