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
    title: "oh... it's you.",
    description: "caught you reading my descriptions.",
  },
  components: {
    Banner,
  },
};
</script>
