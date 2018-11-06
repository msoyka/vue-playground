<template>
  <div v-if="fields" class="dynamic-fields-container">
    <FieldTypeRouter
      v-for="(field, index) in fields"
      :index="index"
      :key="field.id"
      :type="field.type"
      :args="field.props"
    />
  </div>
</template>

<script>
import FieldTypeRouter from '~/components/FieldTypeRouter.vue'

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
