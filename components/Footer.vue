<template>
  <!-- footer start -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top pt-80">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="footer-content">
              <img
                :src="require('@/assets/images/logo_footer.png')"
                alt="Amana Homes Limited footer logo"
                class="img-fluid logo"
              />
              <h5 class="footer-title mt-4 mb-3">Who We Are</h5>
              <p class="footer-text mt-4">
                Amana Homes aspires to weave an unprecedented experience of fine
                living cocooned in comfort for you. It’s the statement of
                prestige and elegant Architecture that sets us apart.
              </p>
            </div>
          </div>
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="footer-content">
              <h5 class="footer-title mb-3">Site Links</h5>
              <ul class="nav flex-column">
                <NuxtLink
                  to="/about-us"
                  active-class="active"
                  tag="li"
                  class="nav-item"
                  ><a class="nav-link">About Us</a></NuxtLink
                >
                <NuxtLink
                  to="/contact-us"
                  active-class="active"
                  tag="li"
                  class="nav-item"
                  ><a class="nav-link">Contact Us</a></NuxtLink
                >
                <NuxtLink
                  to="/faq"
                  active-class="active"
                  tag="li"
                  class="nav-item"
                  ><a class="nav-link">FAQ</a></NuxtLink
                >
                <NuxtLink
                  to="/terms-condition"
                  active-class="active"
                  tag="li"
                  class="nav-item"
                  ><a class="nav-link">Terms & Conditions</a></NuxtLink
                >
              </ul>
            </div>
          </div>

          <div class="col-lg-3">
            <h5 class="footer-title mb-3">Contact Us</h5>
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="nav-link d-flex">
                  <fa :icon="['fas', 'location-dot']" />
                  <span class="ml-2">
                    House 27, Road 2, Sector 9, Uttara, Dhaka-1230
                  </span>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link d-flex">
                  <fa :icon="['fas', 'phone']" />
                  <span class="ml-2">{{ companyPhone }}</span>
                </span>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link d-flex">
                  <fa :icon="['fas', 'envelope']" />
                  <span class="ml-2">{{ companyEmail }}</span>
                </a>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact-us" class="nav-link d-flex">
                  <fa :icon="['fas', 'paper-plane']" />
                  <span class="ml-2">Contact Us</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom py-4">
        <div class="row align-items-center">
          <div class="col-sm-6 mb-3 mb-sm-0">
            Copyright &copy; Amana Homes Ltd. All Rights Reserved.
          </div>
          <div class="col-sm-6">
            <!-- social start -->
            <Social />
            <!-- social end -->
          </div>
        </div>
      </div>
    </div>
    <button v-if="scrollpx > 400" class="scroll-btn" @click="scrollToTop">
      <fa :icon="['fas', 'angle-up']" />
    </button>
  </footer>
  <!-- footer end -->
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      scrollpx: 0,
      companyPhone: process.env.COMPANY_PHONE,
      companyEmail: process.env.COMPANY_EMAIL,
    }
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style></style>
