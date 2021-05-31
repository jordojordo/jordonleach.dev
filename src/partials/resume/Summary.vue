<template>
  <section id="summary">
    <h1 class="text-ui-typo dark:text-dark-tertiary font-bold mb-2">
      {{ objective.heading }}
    </h1>
    <p class="text-ui-typo">
      {{ objective.body }}
    </p>
  </section>
</template>

<script>
export default {
  name: "Summary",
  props: {
    objective: {
      type: Object,
      default: null
    }
  }
}
</script>