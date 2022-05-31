<template>
  <!-- carousel item start-->
  <div class="testimonial-item">
    <div class="testimonial-quote">
      <div class="testimonial-tooltip p-3 text-center">
        {{ testimonial.review }}
      </div>
      <div class="tip"></div>
    </div>
    <div class="testimonial-user mt-4">
      <div class="testimonial-img mx-auto">
        <img
          :src="testimonial.user.avatar"
          alt="testimonial user name"
          class="img-fluid rounded-circle"
        />
      </div>
      <div class="testimonial-info mt-3 text-center">
        <h5 class="card-title text-capitalize font-weight-bold mb-1">
          {{ testimonial.user.name }}
        </h5>
        <!-- <div class="ratings">
          <div class="empty-stars"></div>
          <div
            class="full-stars"
            :style="{ width: (testimonial.rating * 100) / 5 + '%' }"
          ></div>
        </div> -->
        <Rating :rating="testimonial.rating" />
      </div>
    </div>
  </div>
  <!-- carousel item end -->
</template>

<script>
export default {
  name: 'TestimonialItem',
  props: ['testimonial'],
}
</script>

<style scoped></style>
