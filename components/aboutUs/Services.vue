<template>
  <!-- services start  -->
  <div class="container pt-80">
    <div class="sec-header text-center mb-5">
      <p class="text-theme-primary text-capitalize">What we Do</p>
      <h2 class="sec-title text-uppercase text-center">Our Services</h2>
    </div>
    <div class="sec-body">
      <div class="row justify-content-center">
        <!-- col item start -->
        <div class="col-md-6 col-lg-4">
          <div class="card text-center">
            <div class="card-body py-4">
              <div class="icon mb-3">
                <!-- <i class="fas fa-building fa-3x"></i> -->
                <fa :icon="['fas', 'map-location-dot']" class="fa-3x" />
              </div>
              <h5 class="font-weight-bold mb-3">Land Development</h5>
              <p class="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                architecto accusamus.
              </p>
            </div>
          </div>
        </div>
        <!-- col item end -->
        <!-- col item start -->
        <div class="col-md-6 col-lg-4">
          <div class="card text-center">
            <div class="card-body py-4">
              <div class="icon mb-3">
                <fa :icon="['fas', 'building']" class="fa-3x" />
              </div>
              <h5 class="font-weight-bold mb-3">Building Construction</h5>
              <p class="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                architecto accusamus.
              </p>
            </div>
          </div>
        </div>
        <!-- col item end -->
        <!-- col item start -->
        <div class="col-md-6 col-lg-4">
          <div class="card text-center">
            <div class="card-body py-4">
              <div class="icon mb-3">
                <fa :icon="['fas', 'user-gear']" class="fa-3x" />
              </div>
              <h5 class="font-weight-bold mb-3">Project Management</h5>
              <p class="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                architecto accusamus.
              </p>
            </div>
          </div>
        </div>
        <!-- col item end -->
      </div>
    </div>
  </div>
  <!-- services end  -->
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style scoped></style>
