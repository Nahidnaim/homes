<template>
  <div v-if="project" class="card property-details-card">
    <div class="card-header bg-white p-4">
      <h2 class="card-title card-title-large text-capitalize pt-3 pb-1">
        {{ project.name }}
      </h2>
      <p v-if="project.address !== null" class="location mb-2 pb-1">
        <span class="mr-1">
          <fa :icon="['fas', 'location-dot']" />
        </span>
        {{ project.address }}
      </p>
    </div>
    <div class="row no-gutters card-focus">
      <div class="col-6 col-md-3 card-focus-item text-center py-4 p-3">
        <div class="icon mb-3">
          <fa :icon="['fas', 'building']" class="fa-2x" />
        </div>
        <div class="attribute mb-2">Type</div>
        <div v-if="project.type" class="attribute font-weight-bold">
          {{ project.type.name }}
        </div>
      </div>
      <div class="col-6 col-md-3 card-focus-item text-center py-4 p-3">
        <div class="icon mb-3">
          <fa :icon="['fas', 'tags']" class="fa-2x" />
        </div>
        <div class="attribute mb-2">Category</div>
        <div v-if="project.category" class="attribute font-weight-bold">
          {{ project.category.name }}
        </div>
      </div>
      <div class="col-6 col-md-3 card-focus-item text-center py-4 p-3">
        <div class="icon mb-3">
          <fa :icon="['fas', 'circle-info']" class="fa-2x" />
        </div>
        <div class="attribute mb-2">Status</div>
        <div class="attribute font-weight-bold">{{ project.status }}</div>
      </div>
      <div class="col-6 col-md-3 card-focus-item text-center py-4 p-3">
        <div class="icon mb-3">
          <fa :icon="['fas', 'compass-drafting']" class="fa-2x" />
        </div>
        <div class="attribute mb-2">Land Area</div>
        <div v-if="project.landArea" class="attribute font-weight-bold">
          {{ project.landArea }}{{ project.landAreaUnit }}
        </div>
      </div>
    </div>
    <div class="card-body card-text p-4">
      <h2 class="card-title card-title-large mb-3 mt-2">About the project</h2>
      <div v-html="project.description">{{ project.description }}</div>
    </div>
    <div class="card-body card-text p-4 details">
      <h2 class="card-title card-title-large mb-3 mt-2">Details</h2>
      <div class="row">
        <div class="col-sm-6">
          <table class="table">
            <tr>
              <td>Number of Building:</td>
              <td v-if="project.subProjects" class="font-weight-bold">
                {{ project.subProjects.length }}
              </td>
            </tr>
            <tr>
              <td>Land Area:</td>
              <td v-if="project.landArea" class="font-weight-bold">
                {{ project.landArea }}{{ project.landAreaUnit }}
              </td>
            </tr>
            <tr>
              <td>Total Property:</td>
              <td class="font-weight-bold">{{ project.propertyTotal }}</td>
            </tr>
            <tr>
              <td>Property Sold:</td>
              <td class="font-weight-bold">{{ project.propertyBooked }}</td>
            </tr>
            <tr>
              <td>Property Available:</td>
              <td class="font-weight-bold">
                {{ project.propertyTotal - project.propertyBooked }}
              </td>
            </tr>
          </table>
        </div>
        <div class="col-sm-6">
          <table class="table">
            <tr>
              <td>Car Parking Total:</td>
              <td class="font-weight-bold text-uppercase">
                {{ project.carParkingTotal }}
              </td>
            </tr>
            <tr>
              <td>Car Parking Sold:</td>
              <td class="font-weight-bold text-uppercase">
                {{ project.carParkingBooked }}
              </td>
            </tr>
            <tr>
              <td>Bike Parking Total:</td>
              <td class="font-weight-bold text-uppercase">
                {{ project.bikeParkingTotal }}
              </td>
            </tr>
            <tr>
              <td>Bike Parking Sold:</td>
              <td class="font-weight-bold text-uppercase">
                {{ project.bikeParkingBooked }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  // eslint-disable-next-line vue/require-prop-types
  props: ['project'],
}
</script>

<style scoped></style>
