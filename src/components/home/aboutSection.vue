<script setup>
import codeSvg from '../shared/svgs/codeSvg.vue';
import bookSvg from '../shared/svgs/bookSvg.vue'
</script>

<template>
    <div class="bg-blue-700 mb-6">
        <div class="text-white mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-4xl text-white">
                About Me
            </p>
            <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-white">
                Hello, I am Anto. Nice meeting you.
            </p>
            <p class="mx-auto mt-4 max-w-4xl text-center leading-leading text-white">
                Since beginning my journey as a freelance developer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
            </p>

            <div class="flex flex-1 mx-auto gap-8 mt-8 mb-8">
                <div>
                    <a
                        class="flex transform transition duration-500 hover:scale-110 about-cards flex-col items-center justify-center rounded-xl border rounded-md bg-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                        href=""
                    >
                        <div class="svg-bg inline-block rounded-full bg-blue-600 p-10">
                            <codeSvg class="text-gray-800" />
                        </div>
                        

                        <h3 class="mt-3 text-lg font-extrabold text-gray-800 sm:text-xl">
                            Full Stack
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            My Stack
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            HTML, Css, JavaScript, Laravel, PHP, Node.js
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Dev Tools
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            Vercel
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                            GitHub
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                            Stack Overflow
                        </p>
                    </a>
                </div>
                <div>
                    <a
                        class="flex transform transition duration-500 hover:scale-110 about-cards flex-col items-center justify-center rounded-xl border rounded-md bg-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                        href=""
                    >
                        <div class="svg-bg inline-block rounded-full bg-blue-600 p-10">
                            <bookSvg class="text-gray-800" />
                        </div>
                        

                        <h3 class="mt-3 text-lg font-extrabold text-gray-800 sm:text-xl">
                            Mentorship
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            I genuinely care about people, and love helping fellow Developers work on their craft.
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Experience
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            Frontend Development, Backend Development
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Mentorship Stat.
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            3+ Years
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                            200+ Mentees
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                            2,060+ Mentorship Sessions.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.svg-bg {
    background: #A9D6FF;
}

.about-cards {
    width: 488px;
}
</style>