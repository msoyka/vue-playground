
<script>
import { componentLookup } from '~/components/core/registeredCore.js'

export default {
  name: 'Field',
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    type() {
      return this.field.type
    },
    data() {
      return this.field.data
    },
    component() {
      return componentLookup(this.type)
    }
  },
  render(h) {
    const { data, component } = this
    try {
      return h(component, { props: data })
    } catch (error) {
      console.error(`${error.name}: ${error.message}`)
    }
  }
}
</script>
