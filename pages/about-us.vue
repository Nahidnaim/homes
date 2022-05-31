<template>
  <main class="about-us">
    <Breadcrumb />
    <Banner pageName="About Us" :bannerText="bannerText" />
    <AboutUsServices />
    <AboutUsKnowUs />
    <AboutUsCounterWrap />
    <AboutUsFeatures />
    <AboutUsPromotion />
    <Partner />
  </main>
</template>

<script>
export default {
  name: 'AboutUsPage',
  data() {
    return {
      bannerText:
        'We are providing quality apartments in a committed time with best services and lucrative price',
    }
  },
}
</script>
