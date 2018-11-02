import FieldService from '~/api/services/FieldService'

export default {
  namespaced: true,
  state: {
    fields: []
  },
  mutations: {
    setFields(state, fields) {
      state.fields = fields
    }
  },
  actions: {
    async getFieldsByPageId({ commit }, pageId) {
      console.log(pageId)
      try {
        const fields = await FieldService.getFieldsByPageId(pageId)
        commit('setFields', fields)
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
