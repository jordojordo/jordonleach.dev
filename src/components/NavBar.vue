
<script lang="ts">
import { RouterLink } from 'vue-router';

export default { components: { RouterLink } };
</script>

<template>
  <header
    id="header"
    class="container"
  >
    <strong>
      <RouterLink
        class="text-highlight text-bold link text-large"
        to="/"
        data-testid="nav-home"
      >
        Jordo's Territory
      </RouterLink>
    </strong>
    <div>
      <RouterLink
        class="text-highlight text-bold link text-large"
        to="/work"
        data-testid="nav-work"
      >
        Work
      </RouterLink>
      <RouterLink
        class="text-highlight text-bold link text-large"
        to="/projects"
        data-testid="nav-projects"
      >
        Projects
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
}

#header > div > a:nth-child(1) {
  margin-right: .5rem;
}

.link {
  text-decoration: none;
}

@media (max-width: 400px) {
  #header {
    flex-direction: column;
    align-items: flex-start;
  }

  #header > div {
    margin: .75rem 0;
  }
}
</style>