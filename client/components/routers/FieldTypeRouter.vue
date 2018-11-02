<script>
import TextField from '~/components/fieldTypes/TextField.vue'

export default {
  name: 'FieldTypeRouter',
  props: {
    type: {
      type: String,
      required: true,
      default: 'TextField'
    },
    args: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  render(h) {
    const { type, args } = this.$props

    let field
    switch (type) {
      case 'TextField':
        field = TextField
        break
    }

    return h(field, { props: args })
  }
}
</script>
