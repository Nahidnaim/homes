<template>
  <nav class="navbar navbar-expand-lg bg-white py-2">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <Logo />
      </NuxtLink>

      <!-- <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mynav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <div
        id="mynav"
        class="collapse navbar-collapse"
        :class="{ 'dm-show': showNav }"
      >
        <AuthNavbar v-if="user" />
        <Navbar v-else />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {},
  data() {
    return {
      showNav: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>

<style scoped lang="scss">
// .dm-show {
//   display: block !important;
// }
</style>
