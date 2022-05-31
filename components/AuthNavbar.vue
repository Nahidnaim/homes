<template>
  <ul id="mobile_menu" class="navbar-nav ml-auto auth-nav">
    <NuxtLink to="/" active-class="active" tag="li" class="nav-item"
      ><a class="nav-link">Home</a></NuxtLink
    >
    <NuxtLink to="/about-us" active-class="active" tag="li" class="nav-item"
      ><a class="nav-link">About Us</a></NuxtLink
    >
    <NuxtLink to="/contact-us" active-class="active" tag="li" class="nav-item"
      ><a class="nav-link">Contact</a></NuxtLink
    >
    <NuxtLink
      to="#"
      active-class="active"
      tag="li"
      class="nav-item dropdown auth-nav-item ml-lg-4 pt-2 pt-lg-0"
    >
      <div
        id="pro_avatar"
        class="pro-avatar dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          v-if="user.image"
          :src="`${$store.state.baseUrl}/uploads/${user.image}`"
          alt="image"
          class="img-fluid"
        />
        <img v-else :src="user.avatar" alt="image" class="img-fluid" />
      </div>
      <div class="dropdown-menu" aria-labelledby="pro_avatar">
        <NuxtLink class="dropdown-item" to="/profile">Profile</NuxtLink>
        <a class="dropdown-item" @click.prevent="userLogout">
          <i class="fas fa-sign-out-alt mr-1"></i> Logout
        </a>
      </div>
    </NuxtLink>
  </ul>
</template>

<script>
export default {
  name: 'AuthNavbar',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>

<style scoped lang="scss">
.auth-nav {
  &-item {
    color: #aaa;
    //padding-left: 1rem;
    a {
      color: #ced4da;
    }
  }
}
.pro-avatar {
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  padding: 0 !important;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.auth-nav .dropdown-toggle::after {
  display: none;
}
.auth-nav .dropdown-menu {
  left: unset;
  right: 0;
  .dropdown-item {
    color: #22363b !important;
  }
}
</style>
