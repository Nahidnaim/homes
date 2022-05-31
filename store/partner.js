/* eslint-disable no-console */
// state
export const state = () => ({
  partners: [],
})

// getters
export const getters = {
  partners: () => {
    return state.partners
  },
}

// actions
export const actions = {
  // fetch partners data
  async fetchPartners({ commit }) {
    try {
      const response = await this.$axios.get(
        `http://localhost:5000/api/partner`
      )
      if (response.status === 200) {
        commit('SET_PARTNERS', response.data.data)
      }
    } catch (error) {
      console.error(error.response)
      return error.response
    }
  },
}

// mutations
export const mutations = {
  // set partners data
  SET_PARTNERS: (state, partners) => (state.partners = partners),
}
