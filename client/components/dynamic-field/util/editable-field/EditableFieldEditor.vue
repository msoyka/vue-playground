<template>
  <v-dialog
    v-model="edit"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar card dark color="blue">
        <v-btn icon dark @click="toggleedit">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Editor</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn dark flat @click="toggleedit">Accept</v-btn>
          <v-btn dark flat @click="toggleedit">Reset</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-container fluid grid-list-lg>
          <v-layout row wrap="true">
            <v-flex xs4>
              <h4>Editor:</h4>
              <hr>
              <component :is="editor" :data="data"/>
            </v-flex>
            <v-flex xs8>
              <h4>Preview:</h4>
              <hr>
              <component :is="preview" v-bind="data"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import { componentLookup } from '~/components/core/registeredCoreComponents.js'

export default {
  name: 'EditableFieldEditor',
  props: {
    field: {
      type: Object,
      required: true,
      default: () => {}
    },
    edit: {
      type: Boolean,
      default: false
    },
    toggleedit: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    type() {
      return this.field.type
    },
    data() {
      return this.field.data
    },
    preview() {
      return componentLookup(this.type)
    },
    editor() {
      return this.preview.editor
    }
  }
}
</script>

<style>
.field-editor {
  border: 1px solid green;
  position: relative;
}
</style>
