<script>
import TextFieldEditor from '~/components/text/TextFieldEditor.vue'
import BannerFieldEditor from '~/components/banner/BannerFieldEditor.vue'

export default {
  name: 'DynamicFieldEditorRouter',
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    _loadComponentByType(fieldType) {
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
      const editor = this._loadComponentByType(type)
      return h(editor, { props: { data } })
    } catch (error) {
      console.error(`FieldInputRouter could not locate Field Type ${type}`)
    }
  }
}
</script>
