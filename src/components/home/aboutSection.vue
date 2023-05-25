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

                        <p class="mt-4 text-xs text-gray-800 text-center">
                            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Languages I understand:
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            PHP, Ruby*, Javascript, Node*
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Frameworks &amp; Libraries:
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            Laravel, Vue, Nuxt, React**, Inertia*, Alpine*, Lumen, Ruby on Rails**
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            API Specs:
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            RESTful, GraphQL
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

                        <p class="mt-4 text-xs text-gray-800 text-center">
                            I genuinely care about people, and love helping fellow Developers work on their craft.
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Area:
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            Frontend Development, Backend Development, Collaboration
                        </p>

                        <h3 class="mt-3 text-sm font-extrabold text-blue-600 sm:text-xl">
                            Mentorship Stats:
                        </h3>

                        <p class="mt-4 text-xs text-gray-800">
                            1+ Year(s)
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                            20+ Mentees
                        </p>
                        <p class="mt-4 text-xs text-gray-800">
                        1000+ Mentorship Hours.
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