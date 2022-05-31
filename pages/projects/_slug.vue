<template>
  <!-- project single: main section start  -->
  <div class="property-single">
    <!-- <pre>
      {{ project }}
    </pre> -->
    <!-- project single: banner section start -->
    <div v-if="project" class="main-content">
      <ProjectBanner :project="project" />
      <!-- project single: banner section end -->
      <!-- project single: main content section start -->
      <div class="pt-80 pb-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <!-- details card start -->
              <ProjectSingleDetails :project="project" />
              <!-- details card end -->
              <!-- amenities card start -->
              <ProjectSingleAmenities :project="project" />
              <!-- amenities card end -->
              <!-- location card start -->
              <div class="card">
                <div class="card-body card-text p-4">
                  <h2 class="card-title card-title-large mb-4 mt-2">
                    Location
                  </h2>
                  <div class="card-text">
                    <iframe
                      :src="project.mapLocation"
                      width="100%"
                      height="350"
                      frameborder="0"
                      style="border: 0"
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <!-- location card end -->
              <!-- project video card start -->
              <div v-if="project.promoVideo" class="card">
                <div class="card-body card-text p-4">
                  <h2 class="card-title card-title-large mb-4 mt-2">
                    Project Video
                  </h2>
                  <div class="card-text">
                    <iframe
                      width="100%"
                      height="450"
                      :src="project.promoVideo"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <!-- project video card end -->
              <!-- subproject info start -->
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title card-title-large mb-4 mt-2">
                    Project Building Information
                  </h2>
                  <div v-if="project.subProjects" class="row">
                    <div class="col-sm-12">
                      <div
                        v-for="subProject in project.subProjects"
                        :key="subProject._id"
                        class="card box-shadow-none border-1"
                      >
                        <div class="card-header bg-theme text-white">
                          <h6 class="mb-0 text-uppercase font-weight-bold">
                            {{ subProject.name }}
                          </h6>
                        </div>
                        <div class="card-body">
                          <!-- details info start -->
                          <div class="info-item">
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Total Property:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.propertyTotal }}
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Property Sold:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.propertyBooked }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="info-item">
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Car Parking Total:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.carParkingTotal }}
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Car Parking Sold:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.carParkingBooked }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="info-item">
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Bike Parking Total:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.bikeParkingTotal }}
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="row">
                                  <div class="col-6 col-sm-8 col-lg-6">
                                    Bike Parking Sold:
                                  </div>
                                  <div
                                    class="col-6 col-sm-4 col-lg-6 font-weight-bold"
                                  >
                                    {{ subProject.bikeParkingBooked }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="info-item">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="row">
                                  <div class="col-6 col-sm-4 col-lg-3">
                                    Building Height:
                                  </div>
                                  <div
                                    class="col-6 col-sm-8 col-lg-9 font-weight-bold"
                                  >
                                    {{ subProject.floorNo + 1 }} storied
                                    building (<span v-if="subProject.basement"
                                      >Basement+</span
                                    >
                                    <span v-if="subProject.ground"
                                      >Ground+</span
                                    >
                                    <span>{{ subProject.floorNo }}</span
                                    >)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- details info end -->
                          <!-- unit types info start -->
                          <div
                            v-if="subProject.unitTypes"
                            class="unit-types mt-4"
                          >
                            <h6 class="mb-3">Unit Types</h6>
                            <table class="table table-respon">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Size</th>
                                  <th>Price(per sqft)</th>
                                  <th>Price</th>
                                  <th>Total</th>
                                  <th>Sold</th>
                                  <th>Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="unitType in subProject.unitTypes"
                                  :key="unitType._id"
                                >
                                  <td class="py-3 text-capitalize">
                                    {{ unitType.name }}
                                  </td>
                                  <td class="py-3">
                                    {{ unitType.size }}{{ unitType.sizeUnit }}
                                  </td>
                                  <td class="py-3">{{ unitType.price }}TK</td>
                                  <td class="py-3">
                                    {{ unitType.size * unitType.price }}TK
                                  </td>
                                  <td class="py-3">
                                    {{ unitType.propertyTotal }}
                                  </td>
                                  <td class="py-3">
                                    {{ unitType.propertyBooked }}
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-sm bg-theme text-white"
                                      @click="showDetails(unitType)"
                                    >
                                      Details
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- unit types info end -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- sub project info end  -->
              <!-- floorPlan info start  -->
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Floor Plans</h2>
                  <div class="row no-gutters">
                    <div
                      v-for="(floorPlanImage, i) in floorPlanImages"
                      :key="i"
                      class="col-sm-6 col-lg-3 floor-plan-item"
                      @click="() => showImg(i)"
                    >
                      <img
                        :src="floorPlanImage"
                        alt="floor plan"
                        class="img-fluid w-100"
                      />
                    </div>
                    <vue-easy-lightbox
                      :visible="visible"
                      :imgs="floorPlanImages"
                      :index="index"
                      @hide="handleHide"
                    ></vue-easy-lightbox>
                  </div>
                </div>
              </div>
              <!-- floorPlan info end  -->
            </div>
          </div>
        </div>
      </div>
      <!-- project single: main content section end -->
    </div>
    <!-- details modal start -->
    <b-modal
      id="details_modal"
      ref="my-modal"
      centered
      size="lg"
      title="Unit Types Details"
      title-class="font-18"
      hide-footer
    >
      <div class="row">
        <div class="col-6 text-capitalize mb-3">Name</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.name }}
        </div>
        <div class="col-6 text-capitalize mb-3">size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.size }}{{ detailsUnitType.sizeUnit }}
        </div>
        <div class="col-6 text-capitalize mb-3">Price</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.price }}
        </div>
        <div class="col-6 text-capitalize mb-3">Total Property</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.propertyTotal }}
        </div>
        <div class="col-6 text-capitalize mb-3">Property Booked</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.propertyBooked }}
        </div>
        <div class="col-6 text-capitalize mb-3">Bed</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.bed }}
        </div>
        <div class="col-6 text-capitalize mb-3">Bath</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.bath }}
        </div>
        <div class="col-6 text-capitalize mb-3">Veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.veranda }}
        </div>
        <div class="col-6 text-capitalize mb-3">Dining</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.dining }}
        </div>
        <div class="col-6 text-capitalize mb-3">Living</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.living }}
        </div>
        <div class="col-6 text-capitalize mb-3">Kitchen</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.kitchen }}
        </div>
        <div class="col-6 text-capitalize mb-3">Master Bed Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.masterBedSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Child Bed Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.childBedSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Guest Bed Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.guestBedSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Living Room Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.livingRoomSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Family Living Room</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.familyLivingSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Dining Room Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.dinningSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Kitchen Size</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.kitchenSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">Master Toilet</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.masterToiletSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">child Toilet</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.childToiletSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">guest Toilet</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.guestToiletSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">common Toilet</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.commonToiletSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">kitchen Toilet</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.kitchenToiletSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">master veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.masterVerandaSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">child veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.childVerandaSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">guest veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.guestVerandaSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">dining veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.diningVerandaSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">living veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.livingVerandaSize }}
        </div>
        <div class="col-6 text-capitalize mb-3">kitchen veranda</div>
        <div class="col-6 text-capitalize mb-3 font-weight-bold">
          {{ detailsUnitType.kitchenVerandaSize }}
        </div>
      </div>
    </b-modal>
    <!-- details modal end -->
  </div>
  <!-- project single: main section end -->
</template>

<script>
export default {
  data() {
    return {
      detailsIndex: '',
      detailsUnitType: {},
      visible: false,
      singleImage: false,
      visibleCaption: false,
      index: 0,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'project/fetchSingleProject',
      this.$route.params.slug
    )
  },
  computed: {
    project() {
      return this.$store.state.project.project
    },
    floorPlanImages() {
      return this.$store.state.project.floorPlanImages
    },
  },
  methods: {
    showDetails(unitType) {
      this.detailsUnitType = Object.assign({}, unitType)
      this.$bvModal.show('details_modal')
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>

<style scoped lang="scss">
.box-shadow-none {
  box-shadow: none !important;
}
.border-1 {
  border: 1px solid #ddd;
}
.info-item:not(:last-child) {
  margin-bottom: 15px;
}
.floor-plans {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.floor-plan-item {
  cursor: pointer;
  img {
    display: block;
  }
}
@media (max-width: 760.98px) {
  .table-respon {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
