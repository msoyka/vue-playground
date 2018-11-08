<template>
  <div v-if="fields" class="dynamic-fields-container">
    <div v-for="(field, index) in fields" :index="index" :key="field.id">
      <FieldTypeRouter :type="field.type" :args="field.data"/>
    </div>
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
