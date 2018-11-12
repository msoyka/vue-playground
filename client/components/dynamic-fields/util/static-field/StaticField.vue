
<script>
import { componentLookup } from '~/components/core/registeredCoreComponents.js'

export default {
  name: 'StaticField',
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  render(h) {
    const { type, data } = this
    try {
      const ref = componentLookup(type)
      return h(ref, { props: data })
    } catch (error) {
      console.error(`${error.name}: ${error.message}`)
    }
  }
}
</script>
