<template>
  <div class="container my-10 mb-auto">
    <Summary :objective="resumeData.objective" />
    <Experience :work="resumeData.work" />
    <Projects :projects="resumeData.projects" />
    <div class="my-6 hidden md:flex">
      <a
        href="@/files/Jordon_Leach_Resume.pdf"
        download
        class="text-ui-link font-black"
      >
        download pdf
      </a>
    </div>
  </div>
</template>

<script>
import Summary from "@/partials/resume/Summary";
import Experience from "@/partials/resume/Experience";
import Projects from "@/partials/resume/Projects";

export default {
  name: "Body",
  props: {
    resumeData: {
      type: Object,
      default: null,
    },
  },
  components: {
    Summary,
    Experience,
    Projects,
  },
};
</script>
