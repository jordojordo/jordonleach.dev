<template>
  <div class="flex h-screen">
    <div class="m-auto w-20">
      <g-image
        src="@/assets/icons/spinner-third-duotone.svg"
        class="animate-spin w-full h-auto"
        style="--fa-primary-color: #3881ff; --fa-secondary-opacity: .2;"
      ></g-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullPageLoader",
};
</script>
