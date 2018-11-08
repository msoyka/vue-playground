<template>
  <div v-if="fields" class="dynamic-fields-container">
    <div v-for="(field, index) in fields" :index="index" :key="field.id">
      <DynamicFieldRouter :field="field"/>
    </div>
  </div>
</template>

<script>
import DynamicFieldRouter from './DynamicFieldRouter.vue'

export default {
  name: 'DynamicField',
  components: { DynamicFieldRouter },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
