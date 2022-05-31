<template>
  <div class="card amenities-card">
    <div class="card-body card-text p-4">
      <h2 class="card-title card-title-large mb-3 mt-2">Amenities</h2>
      <div class="card-text">
        <div class="row">
          <div
            v-for="(feature, index) in project.features"
            :key="index"
            class="col-sm-4"
          >
            <div class="list-group-item d-flex">
              <fa :icon="['fas', 'check']" class="mr-2" />
              <span>{{ feature.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Amenities',
  // eslint-disable-next-line vue/require-prop-types
  props: ['project'],
}
</script>

<style scoped></style>
