<template>
  <div v-if="pageMeta.fields">
    <div
      v-for="(field, index) in pageMeta.fields"
      :index="index"
      :key="field.id"
    >
      <EditableField :type="field.type" :data="field.data"/>
    </div>
  </div>
</template>

<script>
import EditableField from '~/components/editable-field/EditableField.vue'
import getPageMeta from '~/mixins/getPageMeta.js'

export default {
  layout: 'admin',
  components: { EditableField },
  mixins: [getPageMeta]
}
</script>
