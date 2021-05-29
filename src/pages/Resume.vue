<template>
  <Layout>
    <Body :resumeData="resumeData" />
  </Layout>
</template>

<script>
import resumeData from "@/data/resume.yaml"
import Body from "@/partials/resume/Body"

export default {
  name: "Resume",
  metaInfo: {
    title: "Resume",
    meta: [
      {
        name: "description",
        content: "Marvel in the glory."
      }
    ]
  },
  data() {
    return {
      resumeData
    }
  },
  components: {
    Body
  }
}
</script>