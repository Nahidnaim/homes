<template>
  <!-- sign up: sign up start -->
  <div class="sign-in sec-py-80">
    <div class="container">
      <!-- sign up form start -->
      <div class="row">
        <div class="col-md-9 col-lg-6 mx-auto">
          <div class="card">
            <div
              class="card-header bg-theme-soft text-theme-primary border-0 py-3"
            >
              <div class="row align-items-center">
                <div class="col-6">
                  <h5 class="font-weight-bold">Sign Up!</h5>
                  <p class="mb-0">
                    Get your free
                    <span class="font-weight-bold">{{ companyName }}</span>
                    account now.
                  </p>
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
            <div class="card-body">
              <!-- register with phone start -->
              <form
                v-if="step == 'register'"
                novalidate
                class="sign-in-form rounded"
                @submit.prevent="registerUser"
              >
                <div class="sign-in-form-body">
                  <div class="form-group">
                    <label for="phone_no">Phone Number</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                      </div>
                      <input
                        id="phone_no"
                        v-model="formData.phone"
                        type="text"
                        class="form-control"
                        placeholder="Ex. 017XXXXXXXXX"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-for="(error, index) in formData.phoneErrorMsg"
                      :key="index"
                      class="valid-status text-danger"
                    >
                      {{ error.msg }}
                    </small>
                  </div>

                  <div class="form-group mb-4">
                    <div
                      class="custom-control custom-checkbox mb-4 d-flex align-items-center"
                    >
                      <input
                        id="invalidCheck"
                        v-model="formData.termsConditions"
                        :checked="formData.termsConditions"
                        required
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="invalidCheck"
                        >By signing up, you agree to our
                        <router-link to="/terms-condition"
                          >Terms and Conditions</router-link
                        ></label
                      >
                    </div>
                    <small
                      v-if="!formData.termsConditions"
                      class="valid-status text-danger"
                    >
                      You must agree before submitting.
                    </small>
                  </div>
                  <div v-show="isAjaxCall" class="col-md-12 p-0">
                    <img
                      src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/fancybox_loading.gif"
                      alt="loading gig"
                    />
                    <span class="ml-2">Please wait ...</span>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-block btn-theme-primary"
                      :disabled="!formData.termsConditions || isAjaxCall"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div class="form-group mt-4 mb-0 text-center">
                    Have an account?
                    <router-link to="/signin">Sign In</router-link>
                  </div>
                </div>
              </form>
              <!-- register with phone end -->

              <!-- verify phone number start -->
              <form
                v-if="step == 'verify'"
                novalidate
                class="sign-in-form rounded"
                @submit.prevent="verifyUserPhone"
              >
                <div
                  v-if="successMessage != null"
                  class="alert alert-success text-center"
                >
                  {{ successMessage }}
                </div>
                <div class="sign-in-form-body">
                  <div class="form-group">
                    <label for="phone_verification"
                      >Enter Verification Code</label
                    >
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-user-check"></i>
                        </div>
                      </div>
                      <input
                        id="phone_verification"
                        v-model="formData.verificationCode"
                        type="number"
                        class="form-control"
                        placeholder="Ex. 41XX"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-for="(error, index) in formData.verificationErrorMsg"
                      :key="index"
                      class="valid-status text-danger"
                    >
                      {{ error.msg }}
                    </small>
                  </div>
                  <div class="text-theme-primary mb-2">
                    You will get verification code within 5 minutes.
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-block btn-theme-primary"
                      :disabled="isAjaxCall"
                    >
                      Verify
                    </button>
                  </div>
                  <div class="form-group mt-4 mb-0 text-center">
                    Have an account?
                    <router-link to="/sign-in">Sign In</router-link>
                  </div>
                </div>
              </form>
              <!-- verify phone number end -->

              <!-- fill up user information start -->
              <form
                v-if="step == 'save'"
                novalidate
                class="sign-in-form rounded"
                @submit.prevent="saveUserInformation"
              >
                <!-- show msg start -->
                <div
                  v-if="successMessage != null"
                  class="alert alert-success text-center"
                >
                  {{ successMessage }}
                </div>

                <div
                  v-if="errorMessage != null"
                  class="alert alert-danger text-center"
                >
                  {{ errorMessage }}
                </div>
                <!-- show msg end -->

                <div class="sign-in-form-body">
                  <div class="form-group">
                    <label for="name">Your Name</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-user"></i>
                        </div>
                      </div>
                      <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-if="formData.nameErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ formData.nameErrorMsg }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-envelope"></i>
                        </div>
                      </div>
                      <input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-if="formData.emailErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ formData.emailErrorMsg }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-lock"></i>
                        </div>
                      </div>
                      <input
                        id="password"
                        v-model="formData.password"
                        type="password"
                        class="form-control"
                        placeholder="Your Password"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-if="formData.passwordErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ formData.passwordErrorMsg }}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="con_password">Confirm Password</label>
                    <div class="input-group mb-1">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-lock"></i>
                        </div>
                      </div>
                      <input
                        id="con_password"
                        v-model="formData.confirmPassword"
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <small
                      v-if="formData.confirmPasswordErrorMsg != null"
                      class="valid-status text-danger"
                    >
                      {{ formData.confirmPasswordErrorMsg }}
                    </small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-block btn-theme-primary"
                    :disabled="isAjaxCall"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <!-- fill up user information end -->
            </div>
          </div>
        </div>
      </div>
      <!-- sign up form end -->
    </div>
  </div>
  <!-- sign up: sign up end -->
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios'
export default {
  name: 'Signup',
  data() {
    return {
      companyName: process.env.COMPANY_NAME,
      step: 'register',
      userID: null,
      requestUrl: '/api/auth/register',
      successMessage: null,
      errorMessage: null,
      formData: {
        phone: '',
        phoneErrorMsg: [],
        verificationCode: null,
        verificationErrorMsg: [],
        name: '',
        nameErrorMsg: null,
        email: '',
        emailErrorMsg: null,
        password: '',
        passwordErrorMsg: null,
        confirmPassword: '',
        confirmPasswordErrorMsg: null,
        termsConditions: true,
      },
      isAjaxCall: false,
    }
  },
  methods: {
    // register user with phone number
    registerUser() {
      this.isAjaxCall = true
      axios
        .post(this.requestUrl, {
          phone: this.formData.phone,
        })
        .then((response) => {
          if (!response.data.success) {
            this.formData.phoneErrorMsg = response.data.errors
          } else {
            this.clearNotificationMessages()
            this.successMessage = response.data.msg
            this.userID = response.data.info._id
            this.formData.phone = response.data.info.phone.number
            this.step = 'verify'
            this.requestUrl = '/api/auth/verify'
          }
          this.isAjaxCall = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // verify given phone number
    verifyUserPhone() {
      this.isAjaxCall = true
      axios
        .put(this.requestUrl, {
          userID: this.userID,
          code: this.formData.verificationCode,
        })
        .then((response) => {
          if (!response.data.success) {
            this.formData.verificationErrorMsg = response.data.errors
          } else {
            this.clearNotificationMessages()
            this.successMessage = response.data.msg
            this.step = 'save'
            this.requestUrl = '/api/auth/fill-information'
          }
          this.isAjaxCall = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // save user information
    saveUserInformation() {
      this.isAjaxCall = true
      axios
        .put(this.requestUrl, {
          userID: this.userID,
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password,
          confirm_password: this.formData.confirmPassword,
        })
        .then((response) => {
          if (!response.data.success) {
            // eslint-disable-next-line array-callback-return
            response.data.errors.map((value) => {
              if (value.param === 'name') {
                this.formData.nameErrorMsg = value.msg
              }

              if (value.param === 'email') {
                this.formData.emailErrorMsg = value.msg
              }

              if (value.param === 'password') {
                this.formData.passwordErrorMsg = value.msg
              }

              if (value.param === 'confirm_password') {
                this.formData.confirmPasswordErrorMsg = value.msg
              }

              if (value.param === 'userID' || value.param === 'verification') {
                this.errorMessage = value.msg
              }
            })
          } else {
            this.clearNotificationMessages()
            localStorage.setItem('userToken', response.data.token)
            this.successMessage = null
            this.errorMessage = null
            this.$router.push({ name: 'Home' })
          }
          this.isAjaxCall = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // clear notification message
    clearNotificationMessages() {
      this.formData.phoneErrorMsg = []
      this.formData.verificationErrorMsg = []
      this.formData.nameErrorMsg = null
      this.formData.emailErrorMsg = null
      this.formData.passwordErrorMsg = null
      this.formData.confirmPasswordErrorMsg = null
    },
  },
}
</script>

<style scoped></style>
