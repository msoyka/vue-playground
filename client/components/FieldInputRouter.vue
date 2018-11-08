<script>
import TextFieldEditor from '~/components/fieldTypes/TextFieldEditor.vue'
import BannerFieldEditor from '~/components/fieldTypes/BannerFieldEditor.vue'

export default {
  name: 'FieldInputRouter',
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    _loadFieldByType(fieldType) {
      let field = null
      switch (fieldType) {
        case 'TextField':
          field = TextFieldEditor
          break
        case 'BannerField':
          field = BannerFieldEditor
          break
      }
      if (field === null) {
        throw `${fieldType} isnt registered in FieldInputRouter.`
      }
      return field
    }
  },
  render(h) {
    const { type, data } = this.field
    try {
      const fieldEditor = this._loadFieldByType(type)
      return h(fieldEditor, { props: { data } })
    } catch (error) {
      console.error(`FieldInputRouter could not locate Field Type ${type}`)
    }
  }
}
</script>
