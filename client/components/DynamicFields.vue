<template>
  <div v-if="fields" class="dynamic-fields-container">
    <div v-for="(field, index) in fields" :index="index" :key="field.id">
      <FieldTypeEditor/>
      <FieldTypeRouter :type="field.type" :args="field.props"/>
    </div>
  </div>
</template>

<script>
import FieldTypeRouter from '~/components/FieldTypeRouter.vue'
import FieldTypeEditor from '~/components/FieldTypeEditor.vue'

export default {
  name: 'DynamicFields',
  components: { FieldTypeRouter, FieldTypeEditor },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
