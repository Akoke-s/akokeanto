<script setup>
import githubSvg from "@/components/shared/svgs/githubSvg.vue"
import twitterSvg from "@/components/shared/svgs/twitterSvg.vue"
import mailSvg from "@/components/shared/svgs/mailSvg.vue"
import linkedinSvg from "@/components/shared/svgs/linkedinSvg.vue"

const date = new Date().getFullYear()

</script>

<template>
    <footer aria-label="Site Footer" class="bg-blue-700">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
                Leveling up one day at a time.
            </p>

            <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                <li class="border border-white rounded-full p-2 hover:bg-white">
                    <a
                        href="mailto:antoakoke@gmail.com"
                        rel="noreferrer"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">Email</span>
                        <mailSvg class="text-white hover:text-blue-600" />
                    </a>
                </li>
                <li class="border border-white rounded-full p-2 hover:bg-white">
                    <a
                        href="https://twitter.com/Iam_Veecktor"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">Twitter</span>
                        <twitterSvg class="text-white hover:text-blue-600" />
                    </a>
                </li>

                <li class="border border-white rounded-full p-2 hover:bg-white">
                    <a
                        href="https://github.com/antoHero"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">GitHub</span>
                        <githubSvg class="text-white hover:text-blue-600" />
                    </a>
                </li>

                <li class="border border-white rounded-full p-2 hover:bg-white">
                    <a
                        href="https://linkedin.com/in/akoke-anto"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span class="sr-only">LinkedIn</span>
                        <linkedinSvg class="text-white hover:text-blue-600" />
                    </a>
                </li>
            </ul>

            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
                &copy; {{ date }}, All Rights Reserved. Akoke Anto
            </p>
        </div>
    </footer>
</template>