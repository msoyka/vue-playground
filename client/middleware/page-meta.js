import { SET_CURRENT_PAGE } from '~/store/pages/actionTypes'

export default function(context) {
  const { store, route } = context
  store.dispatch(SET_CURRENT_PAGE, route.path)
}
