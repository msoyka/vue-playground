import { GET_CURRENT_PAGE } from '~/store/pages/getterTypes'

export default {
  asyncData({ store }) {
    return {
      pageMeta: store.getters[GET_CURRENT_PAGE]
    }
  }
}
