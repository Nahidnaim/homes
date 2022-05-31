<template>
  <!-- home: testimonial section start -->
  <div id="home-testimonial" class="sec-py-80">
    <div class="container">
      <h2 class="sec-title mb-3">Testimonial</h2>
      <p class="sec-text">
        It's our pleasure to serve our clients with best services and
        facilities. Please read what people say about us.
      </p>
      <!-- swipe slider start -->
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="swiper-slide"
          >
            <TestimonialItem :testimonial="testimonial" />
          </div>
        </div>
        <!-- If we need pagination -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- If we need navigation buttons -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <!-- swipe slider start -->
    </div>
  </div>
  <!-- home: testimonial section end -->
</template>

<script>
/* eslint-disable no-console */
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, Pagination])

export default {
  name: 'Testimonial',
  async fetch() {
    await this.$store.dispatch('testimonial/fetchTestimonials')
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonial.testimonials
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      slidesPerView: 2,
    })
  },
}
</script>

<style></style>
