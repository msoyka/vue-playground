import Vuex from 'vuex'
import pages from './pages'
// import fields from './fields'

const createStore = () => {
  return new Vuex.Store({
    modules: { pages },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('pages/getPages')
      }
    }
  })
}

export default createStore
