<template>
  <!-- home: testimonial section start -->
  <div id="home-testimonial" class="sec-py-80">
    <div class="container">
      <h2 class="sec-title mb-3">Testimonial</h2>
      <p class="sec-text">
        It's our pleasure to serve our clients with best services and
        facilities. Please read what people say about us.
      </p>
      <!-- tiny slider start -->
      <no-ssr>
        <vue-tiny-slider
          v-if="testimonials.length > 0"
          :mouse-drag="true"
          :controls="false"
          :loop="false"
          items="2"
          :responsive="responsiveOptions"
          gutter="20"
        >
          <div v-for="(testimonial, index) in testimonials" :key="index">
            <testimonial-item :testimonial="testimonial"></testimonial-item>
          </div>
        </vue-tiny-slider>
      </no-ssr>
      <!-- tiny slider end -->
    </div>
  </div>
  <!-- home: testimonial section end -->
</template>

<script>
export default {
  // components: {
  //   'tiny-slider': VueTinySlider,
  // },
  name: 'Testimonial',
  data() {
    return {
      responsiveOptions: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('testimonial/fetchTestimonials')
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonial.testimonials
    },
  },
}
</script>

<style>
.tns-nav {
  text-align: center;
}
.tns-nav button {
  width: 15px;
  height: 15px;
  border: 1px solid #9b6ec1;
  border-radius: 50%;
  margin: 0 2px;
}
.tns-nav button:hover,
.tns-nav button:active,
.tns-nav button:focus,
.tns-nav-active {
  background: #9b6ec1;
}
</style>
