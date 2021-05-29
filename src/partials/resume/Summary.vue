<template>
  <section id="summary">
    <h1 class="dark:text-blue-200 text-blue-500 font-bold mb-2">
      {{ objective.heading }}
    </h1>
    <p class="dark:text-white">
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