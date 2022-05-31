<template>
  <div v-if="project.gallery" class="property-single-banner">
    <vue-tiny-slider
      v-if="project.gallery.length > 0"
      ref="tinySliderProjectBanner"
      :mouse-drag="true"
      :nav="false"
      :loop="false"
      items="3"
      :controls="false"
      navPosition="bottom"
      gutter="1"
      class="tiny-slider"
    >
      <div v-for="(galleryImg, index) in project.gallery" :key="index">
        <img
          :src="$store.state.apiUrl + '/uploads/' + galleryImg"
          alt="property picture"
          class="img-fluid w-100"
        />
      </div>
    </vue-tiny-slider>
  </div>
</template>

<script>
export default {
  name: 'ProjectBanner',
  // eslint-disable-next-line vue/require-prop-types
  props: ['project'],
}
</script>

<style scoped></style>
