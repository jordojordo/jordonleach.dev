<template>
  <header class="header container py-3 flex flex-row justify-between">
    <strong>
      <g-link class="dark:text-white" to="/">
        {{ $static.metadata.siteName }}
      </g-link>
    </strong>
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
export default {
  name: "Header",
};
</script>
