<script lang="ts" setup>
import jsyaml from 'js-yaml';

import type { Project } from '@/types/project';
import projectsData from '@/assets/data/projects.yaml?raw';

import ProjectsList from '@/partials/ProjectsList.vue';

const loadedProjects = jsyaml.load(projectsData);
const projectsExp = loadedProjects as Project | null;
</script>

<template>
  <div class="container">
    <ProjectsList
      v-if="projectsExp"
      :projects="projectsExp"
      class="exp"
    />
  </div>
</template>

<style scoped>
.exp {
  margin: 2.5rem 0;
}
</style>