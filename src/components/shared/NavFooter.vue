<script setup>
import githubSvg from "@/components/shared/svgs/githubSvg.vue"
import twitterSvg from "@/components/shared/svgs/twitterSvg.vue"
import mailSvg from "@/components/shared/svgs/mailSvg.vue"
import linkedinSvg from "@/components/shared/svgs/linkedinSvg.vue"
</script>

<template>
    <footer aria-label="Site Footer" class="bg-blue-700">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
                Living, learning, & leveling up one day at a time.
            </p>

            <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                <li class="border border-white rounded-full p-2">
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">Twitter</span>
                        <twitterSvg />
                    </a>
                </li>

                <li class="border border-white rounded-full p-2">
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">GitHub</span>
                        <githubSvg />
                    </a>
                </li>

                <li class="border border-white rounded-full p-2">
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">LinkedIn</span>
                        <linkedinSvg />
                    </a>
                </li>

                <li class="border border-white rounded-full p-2">
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">GitHub</span>
                        <mailSvg class="text-white" />
                    </a>
                </li>
            </ul>

            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
                &copy; 2023, antoakoke.com 
            </p>
        </div>
    </footer>
</template>