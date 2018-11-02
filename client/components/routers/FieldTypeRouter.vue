<script>
import TextField from '~/components/fieldTypes/TextField.vue'
import BannerField from '~/components/fieldTypes/BannerField.vue'

export default {
  name: 'FieldTypeRouter',
  props: {
    type: {
      type: String,
      required: true
    },
    args: {
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
    const { type, args } = this.$props
    try {
      const field = this._loadFieldByType(type)
      return h(field, { props: args })
    } catch (error) {
      console.error(`FieldTypeRouter could not locate Field Type ${type}`)
    }
  }
}
</script>
