<template>
  <b-navbar-nav class="ml-auto">
    <NuxtLink to="/" tag="li" class="nav-item"
      ><a class="nav-link">Home</a></NuxtLink
    >
    <NuxtLink to="/about-us" tag="li" class="nav-item"
      ><a class="nav-link">About Us</a></NuxtLink
    >
    <NuxtLink to="/contact-us" tag="li" class="nav-item"
      ><a class="nav-link">Contact</a></NuxtLink
    >
    <NuxtLink to="/signin" tag="li" class="nav-item">
      <a class="nav-link btn btn-theme-primary text-capitalize text-white">
        <span>
          <fa :icon="['fas', 'arrow-right-from-bracket']" />
        </span>
        Sign In
      </a>
    </NuxtLink>
  </b-navbar-nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped></style>
