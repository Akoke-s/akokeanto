<script setup>

</script>

<template>
    <header aria-label="Site Header" class="bg-white shadow-md">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <router-link class="block text-blue-600" to="/">
                        thisIsAkoke
                    </router-link>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Site Nav" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <router-link
                                    class=" mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
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
                                    class=" mx-2 font-bold text-gray-600 text-xs uppercase hover:text-gray-800"
                                    href="/"
                                >
                                    Experience
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <a
                                class="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div class="block md:hidden">
                            <button
                            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>