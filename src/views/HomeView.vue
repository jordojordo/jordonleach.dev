<template>
  <main class="container home">
    <img
      alt="My beautiful face"
      src="@/assets/images/me.png"
      class="image"
    />

    <h1
      class="text-primary"
      data-testid="home-h1"
    >
      Welcome to my world.
    </h1>

    <p class="text-primary">
      I'm a Senior Software Engineer with extensive expertise in UI development, lifecycle management, Kubernetes, and GitHub.
    </p>
  </main>
</template>

<style scoped>
.home {
  margin-top: 2.5rem;
  margin-bottom: auto;
}

.image {
  width: 9rem;
  height: 9rem;
  box-shadow: 13px 11px var(--foreground-primary);
}
</style>