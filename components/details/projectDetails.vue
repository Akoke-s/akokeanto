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
        getTheProject() {
            this.project = this.projects.find(project => project.slug === this.$route.params.slug)
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
    }
};

</script>
<template>
    <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div class="leading-relaxed text-gray-800 mb-6">
            <infoHeader />
            
            <projectOverview :singleProject="project" />

            <projectImages />
        </div>

        <projectPagination 
            :items="projects" 
            :itemsPerPage="1"
            @previous-page="gotoPrevious()"
            @next-page="gotoNext()"
            :prev="getPrevious"
            :next="getNext"
            :project="project"
        />
    </div>
</template>
