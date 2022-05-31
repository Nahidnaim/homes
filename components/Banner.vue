<template>
  <div
    class="banner"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/contact_us_banner.jpg') + ')',
    }"
  >
    <div class="container text-white text-center">
      <h2 class="">{{ pageName }}</h2>
      <p>
        {{ bannerText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  // eslint-disable-next-line vue/require-prop-types
  props: ['pageName', 'bannerText'],
}
</script>

<style scoped></style>
