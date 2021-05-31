<template>
  <section id="projects" class="my-3">
    <h4 class="text-ui-typo dark:text-dark-tertiary font-bold mb-2">
      {{ projects.heading }}
    </h4>
    <div v-for="project in projects.items" :key="project.id">
      <div class="flex flex-col md:flex-row md:justify-between mb-2">
        <div>
          <h3 class="text-ui-typo font-bold">
            {{ project.title }}
          </h3>
          <a :href="project.link" class="text-ui-link text-sm font-black">
            {{ project.link }}
          </a>
        </div>

        <p class="text-ui-typo text-sm">
          {{ formatDate(project.date) }}
        </p>
      </div>
      <p class="text-ui-typo">
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
