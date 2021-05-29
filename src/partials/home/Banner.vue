<template>
  <div>
    <g-image
      alt="my beautiful face"
      src="~/assets/images/me.webp"
      width="958"
      height="958"
      class="bg-gray-200 w-36 h-36 rounded-full main-image mb-6"
    />

    <h1 class="dark:text-white">Welcome to my world.</h1>

    <p class="dark:text-white">
      I'm a fullstack web developer with a knack for not writing much about
      myself.
    </p>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss">
.main-image {
  box-shadow: 33px 11px black;
}
</style>