<script>
import EditableField from './util/editable-field/EditableField.vue'
import StaticField from './util/static-field/StaticField.vue'

export default {
  name: 'DynamicField',
  components: { EditableField, StaticField },
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    DynamicFieldType() {
      const { edit } = this.field
      const fieldType = edit ? EditableField : StaticField
      return fieldType
    }
  },
  render(h) {
    const { DynamicFieldType, field } = this
    return h(DynamicFieldType, { props: { field } })
  }
}
</script>
