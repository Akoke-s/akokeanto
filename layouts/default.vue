<script setup>
import headerLinks from '@/components/shared/headerLinks.vue';
import footerLinks from '@/components/shared/footerLinks.vue';

</script>
<template>
    <div>
      <headerLinks />
      <slot />
      <footerLinks />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

body {
  font-family: 'Manrope', sans-serif;
}
</style>
  