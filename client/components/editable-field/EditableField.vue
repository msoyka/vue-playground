
<script>
import { componentLookup } from '~/components/registeredComponents.js'
import EditableFieldTemplate from './EditableFieldTemplate.vue'

export default {
  name: 'EditableField',
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
      const Field = h(ref, { props: data, slot: 'field' })
      const Editor = h(ref.editor, { props: { data }, slot: 'editor' })
      return h(EditableFieldTemplate, [Field, Editor])
    } catch (error) {
      console.error(`${error.name}: ${error.message}`)
    }
  }
}
</script>
