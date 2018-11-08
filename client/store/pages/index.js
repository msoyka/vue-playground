import PageService from '~/api/services/PageService'

export default {
  namespaced: true,
  state: {
    pages: [],
    current: {},
    test: 'hey'
  },
  mutations: {
    setPages(state, pages) {
      state.pages = pages
    },
    setCurrent(state, currentPage) {
      state.current = currentPage
    },
    setCurrentFields(state) {
      state.current.fields = {
        get() {
          return state.test
        },
        set(value) {
          return (state.test = value)
        }
      }
    }
  },
  actions: {
    async setPages({ commit }) {
      try {
        const pages = await PageService.getPages()
        commit('setPages', pages)
      } catch (error) {
        console.warn(error)
      }
    },
    setCurrent({ state, commit }, path) {
      try {
        const current = state.pages.find(page => page.path === path)
        commit('setCurrent', current)
      } catch (error) {
        console.warn(error)
      }
    }
  },
  getters: {
    getPages(state) {
      return state.pages
    },
    getCurrent(state) {
      return state.current
    },
    getCurrentFields(state, getters) {
      return getters.getCurrent.fields
    }
    // getCurrentFieldsFieldByKey: (state, getters) => (fieldKey) => {
    //   return getters.getCurrentFields.find(field => field.key === fieldKey)
    // }
  }
}
