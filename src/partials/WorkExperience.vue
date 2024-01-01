<script lang="ts" setup>
import type { Work, WorkItem } from '@/types/work';
import { formatDate } from '@/utils/date';

defineProps<{
  work?: Work
}>();

function getDate(item: WorkItem) {
  if ( item.endDate && item.endDate !== '' ) {
    return `${ formatDate(item?.startDate) } - ${ formatDate(item?.endDate) }`;
  }

  return `${ formatDate(item?.startDate) } - Present`;
}
</script>

<template>
  <section
    id="experience"
    data-testid="work-section"
  >
    <div class="title">
      <h2
        class="text-primary text-bold text-underline"
        data-testid="work-heading"
      >
        {{ work?.heading }}
      </h2>
      <a
        href="Jordon_Leach_-_Software_Engineer.pdf"
        download
        class="text-link text-bold"
        data-testid="work-pdf-link"
      >
        Download PDF
      </a>
    </div>

    <div
      v-for="item in work?.items"
      :key="item.company"
      class="mb-6"
    >
      <div>
        <h3 class="text-primary text-bold">
          {{ item.company }}
        </h3>
        <p class="text-primary text-small">
          {{ item.position }}
        </p>
        <p class="text-primary text-small">
          {{ getDate(item) }}
        </p>
      </div>
      <ul>
        <template v-for="(bullet, index) in item.summary">
          <li
            v-if="typeof bullet === 'string'"
            :key="`bullet-${item.company}-${index}`"
            class="text-primary"
          >
            {{ bullet }}
          </li>

          <li
            v-else
            :key="`subbullet-${item.company}-${index}`"
          >
            <strong>{{ Object.keys(bullet)[0] }}</strong>
            <ul>
              <li
                v-for="(subBullet, subIndex) in bullet[Object.keys(bullet)[0]]"
                :key="`sub-${ subIndex }`"
                class="text-primary"
              >
                {{ subBullet }}
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.title > a {
  text-decoration: none;
  width: fit-content;
}
</style>