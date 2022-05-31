<template>
  <form action="" @submit.prevent="onSubmit()">
    <div class="form-group">
      <div class="row">
        <div class="col-md-6">
          <input
            v-model="formData.name"
            type="text"
            name="name"
            class="form-control"
            placeholder="Name"
          />
          <div v-if="nameErrorMsg" class="error-msg">{{ nameErrorMsg }}</div>
        </div>
        <div class="col-md-6">
          <input
            v-model="formData.email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
          />
          <div v-if="emailErrorMsg" class="error-msg">{{ emailErrorMsg }}</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <input
        v-model="formData.subject"
        type="text"
        name="subject"
        class="form-control"
        placeholder="Subject"
      />
      <div v-if="subjectErrorMsg" class="error-msg">{{ subjectErrorMsg }}</div>
    </div>
    <div class="form-group">
      <textarea
        v-model="formData.message"
        name="message"
        class="form-control"
        rows="5"
        placeholder="Message..."
      ></textarea>
      <div v-if="messageErrorMsg" class="error-msg">{{ messageErrorMsg }}</div>
    </div>
    <div class="form-group mb-0">
      <button type="submit" class="btn btn-theme-primary">
        <i class="fas fa-paper-plane mr-2"></i> Send Message
      </button>
    </div>
    <div v-if="successMessage" class="text-success text-bold">
      {{ successMessage }}
    </div>
  </form>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios'
export default {
  name: 'ContactFormComponent',
  data() {
    return {
      requestUrl: `/api/contact-us/`,
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      nameErrorMsg: null,
      emailErrorMsg: null,
      subjectErrorMsg: null,
      messageErrorMsg: null,
      successMessage: null,
    }
  },
  methods: {
    onSubmit() {
      axios
        .post(this.requestUrl, {
          name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.type === 'success') {
            this.successMessage = response.data.msg
          }
        })
        .catch((error) => {
          console.log(error.response.data)
          // eslint-disable-next-line array-callback-return
          error.response.data.errors.map((value) => {
            if (value.param === 'name') {
              this.nameErrorMsg = value.msg
            }

            if (value.param === 'email') {
              this.emailErrorMsg = value.msg
            }

            if (value.param === 'subject') {
              this.subjectErrorMsg = value.msg
            }

            if (value.param === 'message') {
              this.messageErrorMsg = value.msg
            }
          })
        })
    },
  },
}
</script>

<style scoped>
.error-msg {
  color: red;
  font-size: 14px;
}
</style>
