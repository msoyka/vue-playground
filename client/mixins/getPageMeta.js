import {
  GET_CURRENT_PAGE,
  GET_CURRENT_PAGE_FIELDS
} from '~/store/pages/getterTypes'

export default {
  asyncData({ store }) {
    return {
      pageMeta: store.getters[GET_CURRENT_PAGE],
      pageFields: store.getters[GET_CURRENT_PAGE_FIELDS]
    }
  }
}
