import { GET_CURRENT_PAGE } from '~/store/pages/getterTypes'
import { SET_CURRENT_PAGE } from '~/store/pages/actionTypes'

export default function(context) {
  const { store, route } = context
  store.dispatch(SET_CURRENT_PAGE, route.path)
  context.pageMeta = store.getters[GET_CURRENT_PAGE]
}
