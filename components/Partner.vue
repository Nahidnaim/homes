<template>
  <!-- home: our partner section start -->
  <div id="home-partner" class="partner-wrap sec-py-80">
    <div class="container">
      <div class="sec-header d-flex justify-content-between mb-5">
        <h2 class="sec-title text-uppercase">Our Partners</h2>
        <div class="carousel-control mt-1">
          <button type="button" role="presentation" @click.prevent="prevSlide">
            <fa :icon="['fas', 'angle-left']" />
          </button>
          <button
            type="button"
            role="presentation"
            class="ml-2"
            @click.prevent="nextSlide"
          >
            <fa :icon="['fas', 'angle-right']" />
          </button>
        </div>
      </div>
      <vue-tiny-slider
        v-if="partners.length > 0"
        ref="tinySliderPartner"
        :mouse-drag="true"
        :nav="false"
        :loop="false"
        items="4"
        :controls="false"
        navPosition="bottom"
        gutter="30"
        class="tiny-slider-partner"
        :responsive="responsiveOptions"
      >
        <div v-for="(partner, index) in partners" :key="index">
          <PartnerItem :partner="partner" />
        </div>
      </vue-tiny-slider>
    </div>
  </div>
  <!-- home: our partner section end -->
</template>

<script>
export default {
  name: 'Partner',
  data() {
    return {
      responsiveOptions: {
        0: {
          items: 1,
        },
        375: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('partner/fetchPartners')
  },
  computed: {
    partners() {
      return this.$store.state.partner.partners
    },
  },
  methods: {
    prevSlide() {
      this.$refs.tinySliderPartner.goTo('prev')
    },
    nextSlide() {
      this.$refs.tinySliderPartner.goTo('next')
    },
  },
}
</script>
