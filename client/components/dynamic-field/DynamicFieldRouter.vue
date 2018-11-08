<script>
import TextField from '~/components/text/TextField.vue'
import BannerField from '~/components/banner/BannerField.vue'

export default {
  name: 'DynamicFieldRouter',
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
          field = TextField
          break
        case 'BannerField':
          field = BannerField
          break
      }
      if (field === null) {
        throw `${fieldType} isnt registered in FieldTypeRouter.`
      }
      return field
    }
  },
  render(h) {
    const { type, data } = this.field
    try {
      const field = this._loadFieldByType(type)
      return h(field, { props: data })
    } catch (error) {
      console.error(`FieldTypeRouter could not locate Field Type ${type}`)
    }
  }
}
</script>
