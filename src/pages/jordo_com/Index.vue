<template>
  <FullPageLoader />
</template>

<script>
import FullPageLoader from "@/components/FullPageLoader";

export default {
  components: {
    FullPageLoader
  },
  mounted() {
    window.location.href = "https://jordonleach.dev/";
  },
};
</script>
