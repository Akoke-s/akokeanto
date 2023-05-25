<script setup>
import { ref } from 'vue';
// import projectsData from '../../projects/projects.json'
// import { useRoute } from 'vue-router';
import localforage from 'localforage';
// const route = useRoute()

// console.log("route: " + route.meta.projects)
// const projects = ref([])
const newProjects = ref([])
// projects.value = projectsData?.projects

const getProjects = async () => {
    try {
        const value = await localforage.getItem('projects');
        newProjects.value = value
        
    } catch (err) {
        console.log(err);
    }
}

getProjects()
</script>

<template>
    <div class="bg-white mb-6" id="works">
        <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-4xl">
                My Works
            </p>

            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8">
                <div class="h-fit group" v-for="(project, idx) in newProjects" :key="idx">
                    <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            :alt="project.slug"
                            :src="project?.featured_image"
                            class="h-56 w-full object-cover"
                            v-if="project?.featured_image != null"
                        />
                        <img
                            :alt="project.slug"
                            src="https://s3-alpha-sig.figma.com/img/4ea1/2e3b/593753e5974a819f4c21db6438adfd86?Expires=1685923200&Signature=WNrpqjknJimcklHLo6k5kFRPr9b-wA0si0Iy5pzQG6DlhR3DovMvzFl4P-3Okszq7UkYH5OvlSmjbVEkjKCg4HKIV8HedZZhmPHMvitrszKfMFrZWGJhN2QA~EyHFUU~GFtDGmC6LE2LwD9BbRdrEDWzCSIGcam03Vvop4cdKp59K15-LJZDIiL0aXhtFqqL1C2T4MMORxsbAygN1IkWzyNiCxi~1o8PRyA3H38aOD4eF3IxfQ9JOJTxEHXoKEk3NLM2TUo1YLEpqvOAg~Mh7wfF7IPjAqUwkQa0V1ZnJeKRF08Ypwvjf9241asPIor0XSIK~F2bvc8Ion1hn6CzyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            class="h-56 w-full object-cover"
                            v-else
                        />
                        <div class="absolute h-full w-full px-4 bg-blue-300 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-5 group-hover:opacity-100 transition-all duration-300">
                            <p class="text-lg text-white mb-4">
                                {{ project?.title }}
                            </p>
                            <router-link :to="`/details/${project.slug}`" class="bg-blue-700 text-white py-2 px-5 rounded-lg cursor-pointer">View</router-link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>