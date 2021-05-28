<template>
  <div class="min-h-screen dark:bg-gray-600">
    <header class="header container py-3 flex flex-row justify-between">
      <strong>
        <g-link class="dark:text-white" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="dark:text-white mr-3" to="/">Home</g-link>
        <g-link class="dark:text-white" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
