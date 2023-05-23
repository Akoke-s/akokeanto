<template>
  <div>
    <NavBar />
    <AppLayout>
      <router-view/>
    </AppLayout>
  </div>
</template>

<script setup>
import NavBar from './components/shared/NavBar.vue';
</script>

