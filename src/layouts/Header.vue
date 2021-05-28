<template>
  <header class="header container py-3 flex flex-row justify-between">
    <strong>
      <g-link class="dark:text-white" to="/">
        {{ $static.metadata.siteName }}
      </g-link>
    </strong>
    <a class="w-6" href="https://github.com/jordojordo/jordonleach.dev">
      <img
        svg-inline
        src="@/assets/icons/code-merge-duotone.svg"
        class="w-full h-full fill-current text-blue-200"
      />
    </a>
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
