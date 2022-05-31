<template>
  <div class="card project-card">
    <div class="card-img">
      <!-- {{ project.image }} -->
      <NuxtLink
        v-if="project.image"
        :to="{
          name: 'projects-slug',
          params: { slug: project.slug, projectID: project._id },
        }"
        class="text-capitalize"
      >
        <img
          :src="`http://localhost:5000/uploads/${project.image}`"
          class="card-img-top img-fluid"
          alt="project"
        />
        <!-- <img
          :src="project.image"
          class="card-img-top img-fluid"
          alt="project"
        /> -->
      </NuxtLink>
      <img
        v-else
        src="https://dummyimage.com/450x500/f3f5f7/aaa"
        class="card-img-top img-fluid"
        alt="project"
      />
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between mb-1">
        <p class="card-type text-uppercase mb-0">{{ project.category.name }}</p>
        <p class="card-type text-muted mb-0">
          <span class="mr-1"><i class="fas fa-phone-alt"></i></span>
          {{ phone }}
        </p>
      </div>
      <h3 class="card-title mb-2 py-1">
        <NuxtLink
          :to="{
            name: 'projects-slug',
            params: { slug: project.slug, projectID: project._id },
          }"
          class="text-capitalize"
        >
          {{ project.name }}
        </NuxtLink>
      </h3>
      <p class="location mb-2 pb-0 text-capitalize">
        <span class="mr-1">
          <fa :icon="['fas', 'location-dot']" />
        </span>
        {{ project.address }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  // eslint-disable-next-line vue/require-prop-types
  props: ['project', 'phone'],
  data() {
    return {}
  },
}
</script>
