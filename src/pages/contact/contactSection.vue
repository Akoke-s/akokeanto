<script setup>
import mailSvg from '@/components/shared/svgs/mailSvg.vue';
import linkedinSvg from '@/components/shared/svgs/linkedinSvg.vue';
import twitterSvg from '@/components/shared/svgs/twitterSvg.vue';
import githubSvg from '@/components/shared/svgs/githubSvg.vue';
</script>

<template>
    <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen bg-white">
        <div class="max-w-4xl leading-relaxed text-gray-800">
            <p class="mt-4 d text-2xl  uppercase">
                Contact Me 
            </p>
            <p class="mt-4 text-sm ">
                If I look like someone you'd love to work with, feel free to send me an email. I usually respond to important emails in a timely manner. Another easy way to contact me is on twitter, I'm quite responsive there too.
            </p>
            <div class="mt-6 flex flex-col gap-6 text-sm font-extrabold">
                <div class="flex gap-4">
                    <mailSvg class="" />
                    <p>akokeanto@gmail.com</p>
                </div>
                <div class="flex gap-4">
                    <githubSvg class="" />
                    <p>@antoHero</p>
                </div>
                <div class="flex gap-4">
                    <linkedinSvg class="" />
                    <p>@akoke-anto</p>
                </div>
                <div class="flex gap-4">
                    <twitterSvg class="" />
                    <p>@Iam_veecktor</p>
                </div>
            </div>
        </div>
        
        

        
    </div>
</template>