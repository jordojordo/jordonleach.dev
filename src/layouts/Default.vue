<template>
  <div class="min-h-screen flex flex-col justify-between dark:bg-gray-600">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
