<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<template>
  <div id="main">
    <NavBar />
    <RouterView />
    <FooterBar />
  </div>
</template>

<style scoped>
#main {
  min-height: 100vh;
  background-color: var(--background-primary);
  color: var(--foreground-primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
