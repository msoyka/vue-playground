<template>
  <div v-if="fields" class="dynamic-fields">
    <div v-for="(field, index) in fields" :index="index" :key="field.id">
      <EditableField v-if="field.edit" :type="field.type" :data="field.data"/>
      <StaticField v-else :type="field.type" :data="field.data"/>
    </div>
  </div>
</template>

<script>
import EditableField from './util/editable-field/EditableField.vue'
import StaticField from './util/static-field/StaticField.vue'

export default {
  name: 'DynamicFields',
  components: { EditableField, StaticField },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
