<template>
  <Layout>
    <section id="home" class="container mt-10 mb-auto">
      <Banner />
    </section>
  </Layout>
</template>

<script>
import Banner from "@/partials/home/Banner";

export default {
  name: "home",
  metaInfo: {
    title: "Oh... it's you.",
    meta: [
      {
        name: "description",
        content: "Caught you reading my description."
      }
    ]
  },
  components: {
    Banner,
  },
};
</script>
