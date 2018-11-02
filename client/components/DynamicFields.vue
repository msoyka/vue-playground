<template>
  <ul v-if="fields">
    <li v-for="(field, index) in fields" :index="index" :key="field.id">
      <FieldTypeRouter :type="field.type" :args="field.props"/>
    </li>
  </ul>
</template>

<script>
import FieldTypeRouter from '~/components/routers/FieldTypeRouter.vue'

export default {
  name: 'DynamicFields',
  components: { FieldTypeRouter },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
