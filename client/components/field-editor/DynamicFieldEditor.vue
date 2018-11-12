<template>
  <div v-if="fields">
    <div v-for="(field, index) in fields" :index="index" :key="index">
      <DynamicFieldEditorRouter :field="field"/>
    </div>
  </div>
</template>

<script>
import DynamicFieldEditorRouter from './DynamicFieldEditorRouter.vue'

export default {
  name: 'DynamicFieldEditor',
  components: { DynamicFieldEditorRouter },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
