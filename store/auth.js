/* eslint-disable no-console */
export const state = () => ({
  accessToken: null,
  refreshToken: null,
  user: null,
})

export const getters = {
  isAuthenticated(state) {
    return !!state.accessToken
  },
}

export const actions = {
  // register user
  async register({ commit, dispatch }, { username, password }) {
    try {
      const res = await this.$axios.post(`/api/auth/register`, {
        username,
        password,
      })
      if (res.status === 200) {
        commit('SET_TOKENS', res.data)
        await dispatch('getUser')
      }
    } catch (error) {
      console.log(error.response)
      return error.response
    }
  },
  // login user
  async login({ commit, dispatch }, user) {
    try {
      const res = await this.$axios.post(`/api/auth/login`, user)
      if (res.status === 200) {
        commit('SET_TOKENS', res.data)
        await dispatch('getUser')
      }
      return res
    } catch (error) {
      console.log(error.response)
      return error.response
    }
  },

  // get user data
  async getUser({ commit }) {
    try {
      const res = await this.$axios.get(`/api/auth/user`)
      if (res.status === 200) {
        commit('SET_USER', res.data.data)
      }
    } catch (error) {
      console.log(error.response)
      return error.response
    }
  },

  // refresh user
  async refresh({ state, commit }) {
    console.log('asce')
    try {
      const res = await this.$axios.post(`/api/auth/refresh`, {
        refreshToken: state.refreshToken,
      })

      console.log(res.data.data)

      if (res.status === 200) {
        commit('SET_TOKENS', res.data)
      }
    } catch (error) {
      console.log(error.response)
      return error.response
    }
  },
}

export const mutations = {
  SET_TOKENS(state, { token, refreshToken = null }) {
    state.accessToken = token

    if (refreshToken) {
      state.refreshToken = refreshToken
    }
    console.log('auth accessToken', state.accessToken)
    console.log('auth refreshToken', state.refreshToken)
  },
  SET_USER(state, user) {
    state.user = user
  },
  LOGOUT(state) {
    state.accessToken = null
    state.refreshToken = null
    state.user = null
  },
}
