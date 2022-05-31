<template>
  <!-- about us: know about us start -->
  <div class="container sec-py-80">
    <div class="row">
      <div class="col-lg-6 mb-3 mb-lg-0">
        <img
          :src="require('@/assets/images/about-us.jpg')"
          alt="about us image"
          class="img-fluid"
        />
      </div>
      <div class="col-lg-6">
        <div class="sec-header mb-4">
          <p class="text-theme-primary text-capitalize">What we Do</p>
          <h2 class="sec-title text-uppercase">Know About us</h2>
        </div>
        <div class="sec-body">
          <p>
            Amana Homes Limited was founded on May 7, 2012. We are a growing
            real estate company in Bangladesh. Since the establishment of the
            company, it has been able to play a significant role in the business
            field through the creation of various structures. The company is
            moving forward with a combination of highly educated, skilled and
            working young entrepreneurs. Along with an enthusiastic and
            experienced dynamic construction engineers.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- about us: know about us end -->
</template>

<script>
export default {
  name: 'KnowUs',
}
</script>

<style scoped></style>
