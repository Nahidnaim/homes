/* eslint-disable no-console */
// state
export const state = () => ({
  projects: [],
  project: {},
  floorPlanImages: [],
  srcImg: null,
  apiUrl: process.env.API_URL,
})

// getters
export const getters = {
  projects: () => {
    return state.projects
  },
  project: () => {
    return state.project
  },
  floorPlanImages: () => {
    return state.floorPlanImages
  },
}

// actions
export const actions = {
  // fetch projects data
  async fetchProjects({ commit }) {
    try {
      const response = await this.$axios.get(
        `http://localhost:5000/api/project`
      )
      if (response.status === 200) {
        commit('SET_PROJECTS', response.data.data)
      }
    } catch (error) {
      console.error(error.response)
      return error.response
    }
  },

  // fetch single project data
  async fetchSingleProject({ commit }, slug) {
    try {
      const response = await this.$axios.get(
        `http://localhost:5000/api/project/${slug}`
      )
      if (response.status === 200) {
        commit('SET_SINGLE_PROJECT', response.data.data)
      }
    } catch (error) {
      console.error(error.response)
      return error.response
    }
  },
}

// mutations
export const mutations = {
  // set projects data
  SET_PROJECTS: (state, projects) => {
    state.projects = projects.filter((project) => project.publish === true)
  },
  // SET SINGLE PROJECT DATA
  SET_SINGLE_PROJECT: (state, project) => {
    state.project = project
    state.floorPlanImages = []
    // process for sub project unit images
    for (let i = 0; i < project.subProjects.length; i++) {
      for (let j = 0; j < project.subProjects[i].floorPlanImages.length; j++) {
        state.srcImg =
          state.apiUrl + '/uploads/' + project.subProjects[i].floorPlanImages[j]

        console.log('srcImg', state.srcImg)

        state.floorPlanImages.push(state.srcImg)
        console.log(state.floorPlanImages)
      }
    }
  },
}
