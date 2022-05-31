<template>
  <div>
    <Breadcrumb />
    <!-- contact us: info and form start -->
    <div class="contact-us">
      <Banner pageName="Contact Us" :bannerText="bannerText" />
      <div class="container sec-py-80 px-4">
        <div class="row contact-us-wrap">
          <div class="col-lg-6 contact-us-info bg-theme text-white">
            <div class="px-4 py-5">
              <h2 class="secondary-title mb-3 text-white">
                Contact Information
              </h2>
              <p>
                If you have any questions or queries a member of support team
                will always be happy to help. Feel free to contact us by
                telephone or email and we will be sure to get to you as soon as
                possible.
              </p>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="nav-link">
                    <fa :icon="['fas', 'location-dot']" class="mr-2" />
                    <span>House 27, Road 2, Sector 9, Uttara, Dhaka-1230</span>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <fa :icon="['fas', 'phone']" class="mr-2" />
                    <span class="">{{ companyPhone }}</span>
                  </span>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <fa :icon="['fas', 'envelope']" class="mr-2" />
                    <span>{{ companyEmail }}</span>
                  </a>
                </li>
              </ul>
              <Social />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-us-form px-4 py-5">
              <h2 class="secondary-title mb-3">We want to hear from you</h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <!-- adresses start -->
        <!-- <ContactUsAddress /> -->
        <!-- adresses end  -->
      </div>
    </div>
    <!-- contact us: info and form end -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      companyPhone: process.env.COMPANY_PHONE,
      companyEmail: process.env.COMPANY_EMAIL,
      bannerText:
        'Meet our brilliant and knowledgeable support team. We are here for you for 24x7 to provide best services',
    }
  },
}
</script>

<style scoped lang="scss"></style>
