<script>
import { componentLookup } from '~/components/core/registeredCore.js'

export default {
  name: 'FieldEditor',
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
    },
    editor() {
      return this.component.editor
    }
  },
  render(h) {
    const { data, editor } = this
    try {
      return h(editor, { props: { data } })
    } catch (error) {
      console.error(`${error.name}: ${error.message}`)
    }
  }
}
</script>
