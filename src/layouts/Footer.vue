<template>
  <div class="container">
    <footer class="py-3">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.target"
        :target="link.label !== 'resume' ? '_blank' : null"
        rel="noopener"
        class="text-ui-typo mr-3"
      >
        {{ link.label }}
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          target: "/resume/",
          label: "resume",
        },
        {
          target: "mailto:jordonleach@gmail.com",
          label: "email",
        },
        {
          target: "https://github.com/jordojordo/jordonleach.dev",
          label: "github",
        },
      ],
    };
  },
};
</script>
