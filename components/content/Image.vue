<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    }
});

const imgSrc = () => {
    try {
        return require(`~/assets/images/${src}`)
    } catch (error) {
        return null
    }
}
</script>
<template>
    <nuxt-img provider="cloudinary" :src="imgSrc" :alt="alt" />
</template>
