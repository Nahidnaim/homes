<template>
  <div class="slider-item">
    <div class="partner-card">
      <img
        :src="`http://localhost:5000/uploads/${partner.image}`"
        :alt="partner.name"
        :title="partner.name"
        class="img-fluid"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerItem',
  // eslint-disable-next-line vue/require-prop-types
  props: ['partner'],
}
</script>

<style></style>
