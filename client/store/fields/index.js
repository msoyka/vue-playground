import FieldService from '~/api/services/FieldService'

export default {
  namespaced: true,
  state: {
    fields: []
  },
  mutations: {
    addFieldToFields(state, collection) {
      state.fields.push(collection)
    }
  },
  actions: {
    async setFieldsByPageId({ commit }, pageId) {
      try {
        const collection = await FieldService.getFieldsByPageId(pageId)
        commit('addFieldToFields', collection[0])
      } catch (error) {
        console.warn(error)
      }
    }
  },
  getters: {
    getFieldsByPageId: state => pageId => {
      const fieldsEntry = state.fields.find(entry => entry.pageId === pageId)
      const fields = fieldsEntry ? fieldsEntry.collection : []
      return fields
    }
  }
}
