<script setup>
import headerLinks from '@/components/shared/headerLinks.vue';
import footerLinks from '@/components/shared/footerLinks.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <headerLinks />
    <main class="flex-1 pt-20 overflow-x-hidden">
      <slot />
    </main>
    <!-- <footerLinks /> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

body {
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

html {
  overflow-x: hidden;
}
</style>