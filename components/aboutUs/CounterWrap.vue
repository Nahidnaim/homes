<template>
  <!-- about us: counter start -->
  <div class="about-us counter-wrap text-white">
    <div class="counter-overlay py-5">
      <div class="container">
        <div class="d-flex justify-content-between px-2">
          <div class="">
            <div class="counter-box">
              <h4>
                <span class="mr-2">
                  <fa :icon="['fas', 'house-user']" />
                </span>
                <AboutUsCounter :endVal="1" />
              </h4>
              <p class="mb-0">Complete Project</p>
            </div>
          </div>
          <div class="">
            <div class="counter-box">
              <h4>
                <span class="mr-2">
                  <fa :icon="['fas', 'key']" />
                </span>
                <AboutUsCounter :endVal="65" />
              </h4>
              <p class="mb-0">Property Sold</p>
            </div>
          </div>
          <div class="">
            <div class="counter-box">
              <h4>
                <span class="mr-2">
                  <fa :icon="['fas', 'face-smile']" />
                </span>
                <AboutUsCounter :endVal="65" />
              </h4>
              <p class="mb-0">Happy Clients</p>
            </div>
          </div>
          <div class="">
            <div class="counter-box">
              <h4>
                <span class="mr-2">
                  <fa :icon="['fas', 'trophy']" />
                </span>
                <AboutUsCounter :endVal="0" />
              </h4>
              <p class="mb-0">Award Win</p>
            </div>
          </div>
        </div>
        <!-- count up -->
      </div>
    </div>
  </div>
  <!-- about us: counter end -->
</template>

<script>
export default {
  name: 'CounterWrap',
}
</script>

<style scoped></style>
