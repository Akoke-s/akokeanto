<script setup>
import NavBar from '@/components/shared/NavBar.vue';
import NavFooter from '@/components/shared/NavFooter.vue';

</script>
<template>
    <div>
      <NavBar />
      <slot />
      <NavFooter />
    </div>
</template>
  