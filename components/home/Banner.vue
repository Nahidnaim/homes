<template>
  <div class="home-banner">
    <!-- <tiny-slider :mouse-drag="true"
                 ref="tinySliderPartner"
                 :nav="false"
                 :loop="true"
                 :autoplay="true"
                 :autoplay-button="false"
                 items="1"
                 :controls="false"
                 navPosition="bottom"
                 gutter="0"
                 class="tiny-slider-partner"
    >
      <div class="banner-item">
        <img :src="require('@/assets/images/bg-1.jpg')" alt="banner image">
      </div>
      <div class="banner-item">
        <img :src="require('@/assets/images/bg-2.jpg')" alt="banner image">
      </div>
      <div class="banner-item">
        <img :src="require('@/assets/images/bg-3.jpg')" alt="banner image">
      </div>
      <div class="banner-item">
        <img :src="require('@/assets/images/bg-4.jpg')" alt="banner image">
      </div>
      <div class="banner-item">
        <img :src="require('@/assets/images/bg-5.jpg')" alt="banner image">
      </div>
    </tiny-slider> -->
    <img :src="require('@/assets/images/bg-1.jpg')" alt="banner image" />
    <div class="banner-content d-flex align-items-center">
      <div class="container">
        <h1 class="text-white home-banner-title">Find Your Home</h1>
        <div class="banner-text text-white">
          Amana Homes Limited is a growing real estate company in Bangladesh.
          Since the company's inception, it has been able to play a significant
          role in the business field through the creation of various
          infrastructures.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueTinySlider from 'vue-tiny-slider'
export default {
  name: 'Banner',
  components: {
    // 'tiny-slider': VueTinySlider,
  },
}
</script>

<style lang="scss">
.home-banner {
  position: relative;
  .banner-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .banner-text {
      max-width: 700px;
    }
  }
  .tns-outer {
    button {
      display: none !important;
    }
  }
  .banner-item {
    max-height: 700px;
  }
  img {
    width: 100%;
    max-height: 680px;
  }
}
</style>
