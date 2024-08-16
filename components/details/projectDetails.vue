<script>
import { computed } from 'vue'

import projectPagination from '@/components/shared/projectPagination.vue';
import projectOverview from '@/components/details/projectOverview.vue';
import projectImages from '@/components/details/projectImages.vue';
import infoHeader from '@/components/details/infoHeader.vue';
import projectsData from '@/utils/projects.json'
// import { getProject } from '@/resources'

export default {
    components: {
        projectPagination,
        projectOverview,
        projectImages,
        infoHeader,
    },
    data() {
        return {
            loading: false,
            project: null,
            projects: projectsData?.projects
        }
    },

    created() {
        this.getTheProject()
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // react to route changes...
                if(toParams !== previousParams) {
                    this.getTheProject()
                }
            }
        )
    },

    computed: {
        getPrevious() {
            let index = this.projects.findIndex(pject => pject.slug === this.$route.params.slug)
            return index > 0 ? this.projects[index - 1] : this.projects[this.projects.length - 1]
        },

        getNext() {

            let index = this.projects.findIndex(pject => pject.slug === this.$route.params.slug)
            let nextIndex = this.projects[index + 1]
            if(index == 0) {
                return nextIndex
            } else if (index > 0 && index < this.projects.length - 1) {
                return nextIndex
            }
            return this.projects[0]
        }
    },

    methods: {
        async getTheProject() {
            // const { data, pending, error } = await useAsyncData('', () => queryContent().where({ slug: route.params.slug }).findOne())
            // // this.project = this.projects.find(project => project.slug === this.$route.params.slug)
            // // console.log("project details: ", data.value)
            // this.project = data.value
        },

        gotoPrevious() {
            if(this.getPrevious != 0) {
                this.$router.push(`/details/${this.getPrevious.slug}`)
            }
        },

        gotoNext() {
            if(this.getNext != 0) {
                this.$router.push(`/details/${this.getNext.slug}`)
            }
        }
    },

    provide() {
        return {
            project: computed(() => this.project)
        }
    },

    setup() {
        const route = useRoute()
        // const project = ref(null)
        // const projects = projectsData?.projects
        // project.value = projects.find(project => project.slug === route.params.slug)

        console.log(route.params.slug);

        // useHead({
        //     title: project.value.title + ' - ' + 'Akoke Victor Anto',
        //     meta: [
        //         { name: 'description', content: project.value.description},
        //         { name: "twitter:card", content: "summary"},
        //         { name: "twitter:site", content: "@Iam_Veecktor"},
        //         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //         { name: "twitter:creator", content: "@Iam_Veecktor"},
        //         { name: "og:title", content: `${project.value.title} - Akoke Victor Anto`},
        //         { name: "og:description", content: project.value.description},
        //         { name: "og:image", content: project.value.featured_image}
        //     ]
        // })
    }
};

</script>
<script setup>
const article = await queryContent('').where({ slug: useRoute().params.slug }).findOne()
</script>
<template>
    <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div class="leading-relaxed text-gray-800 mb-6">
            <infoHeader :title="article.title" />

            <projectOverview :singleProject="article" />

            <projectImages :project="article" />
        </div>

        <!-- <projectPagination
            :items="projects"
            :itemsPerPage="1"
            @previous-page="gotoPrevious()"
            @next-page="gotoNext()"
            :prev="getPrevious"
            :next="getNext"
            :project="project"
        /> -->
    </div>
</template>
