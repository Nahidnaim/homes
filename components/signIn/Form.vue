<template>
  <!-- sign in: sign in start -->
  <div class="sign-in sec-py-80">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-lg-6 mx-auto">
          <div class="card">
            <div
              class="card-header bg-theme-soft text-theme-primary border-0 py-3"
            >
              <div class="row align-items-center">
                <div class="col-6">
                  <h5 class="font-weight-bold">Welcome Back!</h5>
                  <p class="mb-0">Sign in to continue to {{ companyName }}</p>
                </div>
                <div class="col-6 text-right">
                  <img
                    :src="require('@/assets/images/welcome-2.svg')"
                    alt="Amana Homes Limited"
                    class="img-fluid welcome-img"
                  />
                </div>
              </div>
            </div>
            <div class="card-body p-4">
              <form
                novalidate
                class="sign-in-form rounded"
                @submit.prevent="loginUserAuth(user)"
              >
                <div class="sign-in-form-body">
                  <div class="form-group">
                    <label for="phone_email">Phone Number or Email</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <fa :icon="['fas', 'envelope']" />
                        </div>
                      </div>
                      <input
                        id="phone_email"
                        v-model="user.email"
                        type="text"
                        class="form-control"
                        placeholder="Phone number or email"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-if="emailErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ emailErrorMsg }}
                    </small>
                  </div>
                  <div class="form-group mb-4">
                    <label for="password">Password</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <fa :icon="['fas', 'lock']" />
                        </div>
                      </div>
                      <input
                        id="password"
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <small
                      v-if="passwordErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ passwordErrorMsg }}
                    </small>
                  </div>
                  <div class="form-group">
                    <div v-if="errorMessage != null" class="alert alert-danger">
                      <p class="mb-0">
                        {{ errorMessage }}
                      </p>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      class="btn btn-block btn-theme-primary"
                      value="Sign In"
                    />
                  </div>
                  <div class="form-group mt-4 mb-0 text-center">
                    Don't have an account?
                    <router-link to="/signup">Sign Up</router-link>
                  </div>
                  <div class="form-group mt-3 mb-0 text-center">
                    <router-link to="/forgot-password" class="text-capitalize"
                      >Forgot Password?</router-link
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- sign in: sign in end -->
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'SignIn',
  data() {
    return {
      companyName: process.env.COMPANY_NAME,
      user: {
        email: '',
        password: '',
      },
      emailErrorMsg: null,
      passwordErrorMsg: null,
      errorMessage: null,
    }
  },
  methods: {
    loginUserAuth(user) {
      this.clearNotificationMessages()
      this.$store.dispatch('auth/login', user).then((response) => {
        if (!response.data.success) {
          // eslint-disable-next-line array-callback-return
          response.data.errors.map((value) => {
            if (value.param === 'email') {
              this.emailErrorMsg = value.msg
            }

            if (value.param === 'password') {
              this.passwordErrorMsg = value.msg
            }

            if (value.param === 'auth') {
              this.errorMessage = value.msg
            }
          })
        } else {
          this.clearNotificationMessages()
          this.$router.push({ path: '/' })
        }
      })
    },
    clearNotificationMessages() {
      this.emailErrorMsg = null
      this.passwordErrorMsg = null
    },
  },
}
</script>

<style scoped></style>
