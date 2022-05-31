/* eslint-disable no-console */
// state
export const state = () => ({
  testimonials: [],
})

// getters
export const getters = {
  testimonials: () => {
    return state.testimonials
  },
}

// actions
export const actions = {
  // fetch projects data
  async fetchTestimonials({ commit }) {
    try {
      const response = await this.$axios.get(
        `http://localhost:5000/api/testimonial`
      )
      if (response.status === 200) {
        commit('SET_TESTIMONIALS', response.data.data)
      }
    } catch (error) {
      console.error(error.response)
      return error.response
    }
  },
}

// mutations

// mutations
export const mutations = {
  // set testimonials data
  SET_TESTIMONIALS: (state, testimonials) =>
    (state.testimonials = testimonials),
}
