import Vuex from 'vuex'
import pages from './pages'
import fields from './fields'

const createStore = () => {
  return new Vuex.Store({
    modules: { pages, fields }
  })
}

export default createStore
