
<script lang="ts">
import ToggleTheme from './ToggleTheme.vue';

export default { components: { ToggleTheme } };
</script>

<template>
  <footer
    id="footer"
    class="container"
  >
    <ToggleTheme />
    <a
      href="https://github.com/jordojordo/personal"
      target="_blank"
      class="link text-link text-bold text-large"
      data-testid="footer-github-link"
    >
      Github
    </a>
  </footer>
</template>

<style scoped>
#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
}

.link {
  text-decoration: none;
}
</style>