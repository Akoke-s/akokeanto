<script setup>
import mailSvg from './svgs/mailSvg.vue';
</script>

<template>
    <header aria-label="Site Header" class="bg-white shadow-md sticky top-0 z-30">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 hidden md:flex md:items-center md:gap-12">
                    <router-link class="block text-blue-700" to="/">
                        Akoke Anto
                    </router-link>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Site Nav" class="md:block flex items-center justify-center mx-auto">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <router-link
                                    class="mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    to="/"
                                >
                                    Home
                                </router-link>
                            </li>

                            <li>
                                <a
                                    class=" mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    href="/"
                                >
                                    About Me
                                </a>
                            </li>

                            <li>
                                <a
                                    class=" mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    href="/"
                                >
                                    My Work
                                </a>
                            </li>

                            <li>
                                <a
                                    class="mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    href="/"
                                >
                                    Experience
                                </a>
                            </li>

                            <li>
                                <router-link
                                    class="mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    to="/contact"
                                >
                                    <mailSvg class="text-gray-800 lg:hidden" />
                                </router-link>
                                
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4 hidden md:hidden sm:hidden lg:block">
                            <router-link
                                class="mx-2 font-bold text-gray-600 text-xs uppercase hover:bg-blue-800 rounded-md bg-blue-700 px-5 py-2.5 text-white shadow"
                                to="/contact"
                            >
                                Contact Me
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>