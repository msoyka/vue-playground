/* eslint-disable */

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
    // addPage(state, page) {
    //   const pageInPages = state.pages.some(el => el.slug === page.slug)
    //   if (!pageInPages) {
    //     state.pages = [...state.pages, page]
    //   }
    // }
  },
  actions: {
    async getPages({ commit }) {
      try {
        const pages = await PageService.getPages()
        commit('setPages', pages)
      } catch (error) {
        console.warn(error)
      }
    }

    // async addPageBySlug({ commit }, slug) {
    //   try {
    //     const page = await PageService.getPageBySlug(slug)
    //     commit('addPage', page)
    //   } catch (error) {
    //     console.warn(error)
    //   }
    // }

    // async createPage({ commit, state }, pageObj) {
    //   try {
    //     const page = await PageService.createPage(pageObj)
    //     commit('setPages', [...state.pages, page.data])
    //     return page
    //   } catch (error) {
    //     console.warn(error)
    //   }
    // }
  },
  getters: {
    // pages(state) {
    //   return state.pages
    // }
  }
}
