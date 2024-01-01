<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps<{
  svgName: String
}>();

const icon = computed(() => defineAsyncComponent(() => import(`@/assets/images/${ props.svgName }.svg`)));
</script>

<template>
  <component
    :is="icon"
    data-testid="svg-icon-component"
  />
</template>
