<template>
  <div>
    <Breadcrumb />
    <div class="faq">
      <div class="container pt-80 pb-50">
        <!-- sec header start -->
        <div class="sec-header mb-5">
          <h2 class="sec-title text-uppercase">FAQ</h2>
        </div>
        <!-- sec header end -->
        <!-- sec body start -->
        <div class="sec-body">
          <!-- faq card start -->
          <div class="card p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod
              ipsa nam, suscipit in aspernatur dolorem illum quae a, excepturi
              facilis voluptatem molestias veritatis quas. Iure illo tempora
              alias asperiores.
            </p>
            <hr />
            <h5 class="font-weight-bold my-3 text-capitalize">
              Recommended for you
            </h5>
            <FaqAccordion />
          </div>
          <!-- faq card end -->
          <!-- faq card start -->
          <!-- <div class="card p-5">
            <h5 class="font-weight-bold my-3 text-capitalize">
              Property Booking questions
            </h5>
            <FaqAccordion />
          </div> -->
          <!-- faq card end -->
        </div>
        <!-- sec body end  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
}
</script>

<style scoped></style>
