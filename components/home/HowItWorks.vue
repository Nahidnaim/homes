<template>
  <!-- home: How it works section start -->
  <div id="home-how-it-works" class="how-it-wrap sec-py-80">
    <div class="container">
      <div class="sec-header mb-5">
        <h2 class="sec-title font-weight-bold">See How It Works</h2>
        <p class="sec-slogan">Book a space that meets your needs</p>
      </div>
      <div class="sec-body">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="card how-it-card">
              <h3 class="card-index font-weight-bold">01</h3>
              <div class="card-body">
                <img
                  :src="require('@/assets/images/blue-search.png')"
                  alt="what you want"
                />
                <h5 class="card-title font-weight-bold mt-4 mb-3">
                  Explore amazing places
                </h5>
                <p class="card-text">
                  Looking for a beautiful flat, apartment, entire house or land
                  plot with best facilities and services ?
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="card how-it-card">
              <h3 class="card-index font-weight-bold">02</h3>
              <div class="card-body">
                <img
                  :src="require('@/assets/images/blue-hand.png')"
                  alt="what to do"
                />
                <h5 class="card-title font-weight-bold mt-4 mb-3">
                  Choose What To Do
                </h5>
                <p class="card-text">
                  Explore our website and find out your desired property at
                  comfortable location and contact with us for further process.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="card how-it-card">
              <h3 class="card-index font-weight-bold">03</h3>
              <div class="card-body">
                <img
                  :src="require('@/assets/images/blue-flag.png')"
                  alt="what to do"
                />
                <h5 class="card-title font-weight-bold mt-4 mb-3">
                  Get what you want
                </h5>
                <p class="card-text">
                  Talk with us to know purchase procedure, pay as agreement, get
                  your dream property and support from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- home: How it works section end -->
</template>

<script>
export default {
  name: 'HowItWorks',
}
</script>

<style scoped></style>
