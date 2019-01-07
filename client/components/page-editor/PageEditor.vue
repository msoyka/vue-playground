<template>
  <div class="layout">
    <v-btn color="blue" dark small fixed bottom right fab @click="edit = !edit">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <div class="editor">
      <Editor :fields="meta.fields"/>
    </div>
    <div class="display">
      <div v-for="(field, index) in meta.fields" :index="index" :key="field.id">
        <Field :field="field"/>
      </div>
    </div>
  </div>
</template>

<script>
// import DynamicField from '~/components/dynamic-field/DynamicField.vue'
import Field from '~/components/field/Field.vue'
import Editor from '~/components/editor/Editor.vue'
import pageSEO from '~/mixins/pageSEO.js'

export default {
  name: 'PageEditor',
  components: { Field, Editor },
  mixins: [pageSEO],
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
}
.editor {
  border: 1px solid green;
  position: absolute;
  width: 300px;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
}
.display {
  width: 100%;
  border: 1px solid gray;
  padding-left: 300px;
}
</style>
