import PageService from '~/api/services/PageService'

export default {
  namespaced: true,
  state: {
    pages: []
  },
  mutations: {
    setPages(state, pages) {
      state.pages = pages
    }
  },
  actions: {
    async getPages({ commit }) {
      try {
        const pages = await PageService.getPages()
        commit('setPages', pages)
      } catch (error) {
        console.warn(error)
      }
    },
    async createPage({ commit, state }, pageObj) {
      try {
        const page = await PageService.createPage(pageObj)
        commit('setPages', [...state.pages, page.data])
      } catch (error) {
        console.warn(error)
      }
    }
  },
  getters: {
    pages(state) {
      return state.pages
    }
  }
}
