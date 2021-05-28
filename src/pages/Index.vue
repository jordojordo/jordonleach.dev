<template>
  <Layout>
    <section id="home" class="container my-20">
      <Banner />
    </section>
  </Layout>
</template>

<script>
import Banner from "@/partials/Banner";
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
