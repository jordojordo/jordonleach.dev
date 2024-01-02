<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const currentRoute = router.currentRoute.value.fullPath;
</script>

<template>
  <section class="container">
    <h2
      class="text-primary"
      data-testid="error-heading"
    >
      {{ `Route "${ currentRoute }" not found.` }}
    </h2>
  </section>
</template>