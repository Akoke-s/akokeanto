
<template>
    <header aria-label="Site Header" class="bg-white shadow-md sticky top-0 z-30" @click.self="openMenu = false">
        <nav class="bg-white shadow-md sticky top-0 z-30">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button @click="openMenu = !openMenu" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 text-center items-center">
                            <nuxt-link to="/" class="block mx-2 lg:hidden text-sm text-blue-700 uppercase">Akoke</nuxt-link>
                            <nuxt-link to="/" class="hidden mx-2 lg:block text-sm text-blue-700 uppercase">Akoke</nuxt-link>
                            <!-- <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> -->
                            <!-- <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> -->
            
                        </div>
                        <div class="hidden sm:ml-4 sm:block">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/"
                                >
                                    Home
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/#about"
                                >
                                    About
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/#works" 
                                >
                                    Work
                                </nuxt-link>
                                <nuxt-link
                                    class="mx-2 text-gray-600 px-3 py-2 hover:text-gray-800 rounded-md text-sm font-medium flex text-center items-center"
                                    to="/#experience" 
                                >
                                    Experience
                                </nuxt-link>
                                
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative ml-3">
                            <div>
                                <nuxt-link
                                    class="mx-2 font-bold text-gray-600 text-xs hover:bg-blue-800 rounded-md bg-blue-700 px-4 py-2 text-white shadow cursor-pointer"
                                    to="/contact"
                                >
                                        Contact Me
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu" v-if="openMenu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <nuxt-link 
                        to="/" 
                        class="bg-blue-700 text-white hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-sm font-medium" 
                        aria-current="page"
                    >
                        Home
                    </nuxt-link>
                    <nuxt-link 
                        to="/#about"
                        class="text-gray-600 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
                    >
                        About Me
                    </nuxt-link>
                    <nuxt-link 
                        to="/#works" 
                        class="text-gray-600 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
                    >
                        My Works
                    </nuxt-link>
                    <nuxt-link 
                        to="/#experience" 
                        class="text-gray-600 hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
                    >
                        Experience
                    </nuxt-link>
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
                if(toHash !== previousHash) {
                    this.openMenu = false
                }
            }
        )
    },
}
</script>