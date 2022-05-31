<template>
  <!-- about us: promotion start -->
  <div class="about-us pt-80">
    <div class="container">
      <div class="sec-body">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/ATSgwZXOuUo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-lg-6">
            <div class="sec-header">
              <p id="abc" class="text-theme-primary text-capitalize">
                What we Do
              </p>
              <h2 class="sec-title text-uppercase mb-4">our amazing project</h2>
              <!-- vue accordion start -->
              <vsa-list>
                <!-- Here you can use v-for to loop through items  -->
                <vsa-item :init-active="true">
                  <vsa-heading> Mission </vsa-heading>
                  <vsa-icon>
                    <span class="open">
                      <fa :icon="['fas', 'plus']" />
                    </span>
                    <span class="close">
                      <fa :icon="['fas', 'minus']" />
                    </span>
                  </vsa-icon>
                  <vsa-content>
                    To provide the people of Bangladesh with a world-class
                    standard of living by focusing on the quality of impeccable
                    products, excellent service and promise. We are committed to
                    meeting the needs of the part of the people, who are looking
                    for a complete housing solution with the right of health at
                    their doorstep, assuring safety, security, recreational
                    facilities and provision of all daily necessities.
                  </vsa-content>
                </vsa-item>
                <vsa-item>
                  <vsa-heading> Vision </vsa-heading>
                  <vsa-icon>
                    <span class="open">
                      <fa :icon="['fas', 'plus']" />
                    </span>
                    <span class="close">
                      <fa :icon="['fas', 'minus']" />
                    </span>
                  </vsa-icon>

                  <vsa-content>
                    Create world class living environment in Bangladesh by
                    infusing creativity with technology and developing new path
                    breaking products of global standards.
                    <h6 class="mt-3 font-weight-bold">Principles:</h6>
                    <ul>
                      <li>Morals</li>
                      <li>Responsibility</li>
                      <li>Clearness</li>
                    </ul>
                  </vsa-content>
                </vsa-item>
                <vsa-item>
                  <vsa-heading> Our Focus Areas </vsa-heading>
                  <vsa-icon>
                    <span class="open">
                      <fa :icon="['fas', 'plus']" />
                    </span>
                    <span class="close">
                      <fa :icon="['fas', 'minus']" />
                    </span>
                  </vsa-icon>

                  <vsa-content>
                    We offer world class real estate to create the moments of
                    our clients' lives. The moment our main focus is on the area
                    we have taken orders to create to reach our goals.
                  </vsa-content>
                </vsa-item>
              </vsa-list>
              <!-- vue accordion end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- about us: promotion end -->
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from 'vue-simple-accordion'
export default {
  name: 'Promotion',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
  },
}
</script>

<style lang="scss" scoped>
.vsa-list {
  --vsa-border-style: none;
  --vsa-default-icon-size: 0.35;
  border: none;
}
.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
      }
    }
  }
  &__trigger__icon {
    padding-left: 1.1rem;
    .open {
      display: block;
      font-size: 0.9rem;
    }

    .close {
      display: none;
      font-size: 0.9rem;
    }
  }
}
</style>
