<template>
  <div v-if="fields">
    <div v-for="(field, index) in fields" :index="index" :key="field.id">
      <DynamicField :field="field"/>
    </div>
  </div>
</template>

<script>
import DynamicField from '~/components/dynamic-field/DynamicField.vue'
import pageSEO from '~/mixins/pageSEO.js'

export default {
  name: 'PageEditor',
  components: { DynamicField },
  mixins: [pageSEO],
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    fields() {
      return this.meta.fields
    }
  }
}
</script>
