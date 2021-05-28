<template>
  <div class="container">
    <footer class="absolute bottom-0 py-3">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.target"
        download
        class="dark:text-blue-200 mr-3"
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
          target: "/files/jordon_leach_resume.pdf",
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
