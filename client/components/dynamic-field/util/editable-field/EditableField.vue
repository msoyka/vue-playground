<template>
  <div class="editable-field">
    <v-btn color="blue" dark small absolute top right fab @click="toggleedit()">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <StaticField :field="field"/>
    <EditableFieldEditor :field="field" :edit="edit" :toggleedit="toggleedit"/>
  </div>
</template>

<script>
import StaticField from '~/components/dynamic-field/util/static-field/StaticField.vue'
import EditableFieldEditor from './EditableFieldEditor.vue'

export default {
  name: 'EditableField',
  components: { EditableFieldEditor, StaticField },
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      edit: false
    }
  },
  methods: {
    toggleedit() {
      this.edit = !this.edit
    }
  }
}
</script>

<style>
.editable-field {
  position: relative;
  border: 1px solid lightblue;
  padding: 1rem;
}
</style>
