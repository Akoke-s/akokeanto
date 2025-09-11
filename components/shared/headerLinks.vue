
<template>
    <header aria-label="Site Header" class="flex items-center justify-center bg-white sticky top-0 z-30 " @click.self="openMenu = false">
        <nav class="bg-white shadow-sm sticky flex items-center justify-center top-0 z-30 mx-auto max-w-2xl rounded-full mt-8 border border-blue-100">
            <div class="px-2 sm:px-6 lg:px-8">
                <div class="relative flex py-4 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center">
                        <div class="sm:block">
                            <div class="flex space-x-0 md:space-x-4">
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/">
                                    Home
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/about">
                                    About
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/projects">
                                    Projects
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/#experience">
                                    Contact
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            openMenu: ref(false)
        }
    },
    created() {
        this.$watch(
            () => this.$route.hash,
            (toHash, previousHash) => {
                // react to route changes...
                if (toHash !== previousHash) {
                    this.openMenu = false
                }
            }
        )
    },
}
</script>