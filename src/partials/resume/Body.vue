<template>
  <div class="container my-10 mb-auto">
    <section id="summary">
      <h1 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
        {{ resumeData.objective.heading }}
      </h1>
      <p class="dark:text-white">
        {{ resumeData.objective.body }}
      </p>
    </section>
    <section id="experience" class="my-3">
      <h2 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
        {{ resumeData.work.heading }}
      </h2>
      <div v-for="item in resumeData.work.items" :key="item.id" class="mb-6">
        <div class="flex flex-col md:flex-row md:justify-between mb-2">
          <div>
            <h3 class="dark:text-white font-bold">
              {{ item.company }}
            </h3>
            <p class="dark:text-white text-sm">
              {{ item.position }}
            </p>
          </div>

          <p class="dark:text-white text-sm">
            {{
              item.endDate !== ""
                ? `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`
                : `${formatDate(item.startDate)} - Present`
            }}
          </p>
        </div>
        <ol>
          <li
            v-for="bullet in item.summary"
            :key="bullet.id"
            class="dark:text-white mb-1"
          >
            {{ bullet }}
          </li>
        </ol>
      </div>
    </section>
    <section id="projects" class="my-3">
      <h4 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
        {{ resumeData.projects.heading }}
      </h4>
      <div v-for="project in resumeData.projects.items" :key="project.id">
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
  </div>
</template>

<script>
export default {
  name: "Body",
  props: {
    resumeData: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    },
  },
};
</script>
