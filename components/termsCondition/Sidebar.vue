<template>
  <div class="col-lg-3">
    <ul class="settings list-group mb-5 mb-lg-0">
      <NuxtLink
        v-scroll-to="'#general'"
        to=""
        class="list-group-item text-capitalize list-group-item-action"
        >General
      </NuxtLink>
      <NuxtLink
        v-scroll-to="'#payment'"
        to=""
        class="list-group-item text-capitalize list-group-item-action"
        >Payment
      </NuxtLink>
      <NuxtLink
        v-scroll-to="'#charges'"
        to=""
        class="list-group-item text-capitalize list-group-item-action"
        >Charges
      </NuxtLink>
      <NuxtLink
        v-scroll-to="'#project-handover'"
        to=""
        class="list-group-item text-capitalize list-group-item-action"
        >Project Handover
      </NuxtLink>
      <NuxtLink
        v-scroll-to="'#structural-and-engineering-features'"
        to=""
        class="list-group-item text-capitalize list-group-item-action"
        >Structural & Engineering Features
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TermsConditionSidebar',
}
</script>

<style scoped></style>
