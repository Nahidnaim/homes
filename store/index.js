/* eslint-disable no-console */
// state
export const state = () => ({
  apiUrl: process.env.API_URL,
  baseUrl: process.env.API_URL,
})
// actions
export const actions = {
  async nuxtServerInit({ state, commit, dispatch }) {
    const cookie = this.$cookies.get('auth')
    console.log('cookie', cookie)
    if (cookie) {
      commit('auth/SET_TOKENS', cookie.auth)
    }

    const { accessToken, refreshToken } = state.auth

    console.log('accessToken', accessToken)
    console.log('refreshToken', refreshToken)

    if (accessToken && refreshToken) {
      try {
        await dispatch('auth/refresh')
      } catch (error) {
        commit('auth/LOGOUT')
      }
    }
  },
}
// mutations
export const mutations = {}
