<template>
  <section id="projects" class="my-3">
    <h4 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
      {{ projects.heading }}
    </h4>
    <div v-for="project in projects.items" :key="project.id">
      <div class="flex flex-col md:flex-row md:justify-between mb-2">
        <div>
          <h3 class="dark:text-white font-bold">
            {{ project.title }}
          </h3>
          <a :href="project.link" class="dark:text-blue-200 text-sm">
            {{ project.link }}
          </a>
        </div>

        <p class="dark:text-white text-sm">
          {{ formatDate(project.date) }}
        </p>
      </div>
      <p class="dark:text-white">
        {{ project.summary }}
      </p>
    </div>
  </section>
</template>

<script>
import { dateMixin } from "@/mixins/dateMixin";

export default {
  name: "Projects",
  props: {
    projects: {
      type: Object,
      default: null,
    },
  },
  mixins: [dateMixin],
};
</script>
