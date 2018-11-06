import Vuex from 'vuex'
import pages from './pages'
import { SET_PAGES } from './pages/actionTypes'

const createStore = () => {
  return new Vuex.Store({
    modules: { pages },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch(SET_PAGES)
      }
    }
  })
}

export default createStore
