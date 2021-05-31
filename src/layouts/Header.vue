<template>
  <header class="header container py-3 flex flex-row justify-between">
    <strong>
      <g-link class="text-ui-typo" to="/">
        {{ $static.metadata.siteName }}
      </g-link>
    </strong>
    <ToggleTheme />
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ToggleTheme from "@/components/ToggleTheme";

export default {
  name: "Header",
  components: {
    ToggleTheme,
  },
};
</script>
