<template>
  <section id="experience" class="my-3">
    <h2 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
      {{ work.heading }}
    </h2>
    <div v-for="item in work.items" :key="item.id" class="mb-6">
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
</template>

<script>
import { dateMixin } from "@/mixins/dateMixin";

export default {
  name: "Experience",
  props: {
    work: {
      type: Object,
      default: null,
    },
  },
  mixins: [dateMixin],
};
</script>
