<script lang="ts" setup>
import type { Project } from '@/types/project';
import { formatDate } from '@/utils/date';

import SvgIcon from '@/components/SvgIcon.vue';

defineProps<{
  projects?: Project
}>();
</script>

<template>
  <section
    id="projects"
    data-testid="projects-section"
  >
    <h2
      class="text-primary text-bold text-underline"
      data-testid="projects-heading"
    >
      {{ projects?.heading }}
    </h2>
    <div
      v-for="project in projects?.items"
      :key="project?.id"
      data-testid="project-id"
    >
      <div>
        <div class="title">
          <h3
            class="text-primary text-bold"
            data-testid="project-title"
          >
            {{ project.title }}
          </h3>
          <a
            :href="project.link"
            target="_blank"
            data-testid="project-link"
          >
            <SvgIcon
              svg-name="open-in-window"
              class="icon"
              data-testid="project-icon"
            />
          </a>
        </div>

        <p
          class="text-primary text-small"
          data-testid="project-date"
        >
          {{ formatDate(project.date) }}
        </p>
      </div>

      <h4 class="text-primary">
        <strong>Overview:</strong>
      </h4>
      <ul>
        <template v-for="(bullet, index) in project.description.summary">
          <li
            v-if="typeof bullet === 'string'"
            :key="`summary-${project.title}-${index}`"
            class="text-primary"
            data-testid="project-summary-bullet"
          >
            {{ bullet }}
          </li>

          <li
            v-else
            :key="`subbullet-${project.title}-${index}`"
          >
            <strong>{{ Object.keys(bullet)[0] }}</strong>
            <ul>
              <li
                v-for="(subBullet, subIndex) in bullet[Object.keys(bullet)[0]]"
                :key="`sub-${ subIndex }`"
                class="text-primary"
                data-testid="project-summary-sub-bullet"
              >
                {{ subBullet }}
              </li>
            </ul>
          </li>
        </template>
      </ul>

      <template v-if="project.description.features">
        <h4 class="text-primary">
          <strong>Features:</strong>
        </h4>
        <ul>
          <template v-for="(bullet, index) in project.description.features">
            <li
              v-if="typeof bullet === 'string'"
              :key="`features-${project.title}-${index}`"
              class="text-primary"
              data-testid="project-feature-bullet"
            >
              {{ bullet }}
            </li>

            <li
              v-else
              :key="`subFeature-${project.title}-${index}`"
            >
              <strong>{{ Object.keys(bullet)[0] }}</strong>
              <ul>
                <li
                  v-for="(subFeature, subIndex) in bullet[Object.keys(bullet)[0]]"
                  :key="`sub-${ subIndex }`"
                  class="text-primary"
                  data-testid="project-feature-sub-bullet"
                >
                  {{ subFeature }}
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </template>
    </div>
  </section>
</template>

<style scoped>

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
  margin-left: .5rem;
  stroke: var(--foreground-link)
}
</style>
