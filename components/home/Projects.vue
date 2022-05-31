<template>
  <!-- home: projects section start -->
  <div id="home-project" class="bg-theme-secondary pt-80 pb-50">
    <div class="container">
      <h2 class="sec-title text-uppercase mb-5">Our Latest Projects</h2>
      <div v-if="projects" class="row">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-md-6 col-xl-4"
        >
          <Project :project="project" :phone="phone" />
        </div>
      </div>
    </div>
  </div>
  <!-- home: projects section end -->
</template>

<script>
export default {
  name: 'Projects',
  components: {},
  data() {
    return {
      phone: process.env.COMPANY_PHONE,
    }
  },
  async fetch() {
    await this.$store.dispatch('project/fetchProjects')
  },
  computed: {
    projects() {
      return this.$store.state.project.projects
    },
  },
}
</script>

<style></style>
