<script lang="ts" setup>
import jsyaml from 'js-yaml';

import type { Work } from '@/types/work';
import workData from '@/assets/data/work.yaml?raw';

import WorkExperience from '@/partials/WorkExperience.vue';

const loadedWork = jsyaml.load(workData);
const workExp = loadedWork as Work | null;
</script>

<template>
  <div class="container">
    <WorkExperience
      v-if="workExp"
      :work="workExp"
      class="exp"
    />
  </div>
</template>

<style scoped>
.exp {
  margin: 2.5rem 0;
}
</style>